import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ExternalLink, PenLine, BookOpen, Mic, ChevronDown } from 'lucide-react';
import { articles, publications } from '../data';

type Tab = 'articles' | 'publications';

export function Writing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<Tab>('articles');

  return (
    <section id="writing" className="bg-mist py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-10"
        >
          <div className="lg:col-span-6">
            <p className="font-mono text-[26px] md:text-[30px] font-bold uppercase tracking-wider2 text-coral">Articles</p>
            <h2 className="mt-4 font-display font-black text-[26px] md:text-[32px] lg:text-[38px] leading-[1.05] text-ink">
              Articles & <span className="accent">publications.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              {articles.length} articles across Medium and the official Google Cloud publication,
              plus peer-reviewed research. Notes from the build.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-10"
        >
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'articles'
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper text-ink-2 border-line hover:border-ink'
            }`}
          >
            <PenLine size={14} strokeWidth={1.9} /> Articles ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab('publications')}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'publications'
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper text-ink-2 border-line hover:border-ink'
            }`}
          >
            <BookOpen size={14} strokeWidth={1.9} /> Publications ({publications.length})
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'articles' ? (
            <ArticlesTab key="articles" inView={inView} />
          ) : (
            <PublicationsTab key="publications" inView={inView} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

type SeriesKey = 'agentops' | 'evals' | 'distributed' | 'adk' | 'mlops' | 'more' | null;

function ArticlesTab({ inView }: { inView: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const [openSeries, setOpenSeries] = useState<SeriesKey>('agentops');

  const agentOpsSeries = articles.filter(a => a.id.startsWith('agentops-'));
  const evalsSeries = articles.filter(a => a.id.startsWith('evals-'));
  const distributedMasSeries = articles.filter(a => a.id.startsWith('distributed-mas'));
  const adkSeries = articles.filter(a => a.id.startsWith('google-adk'));
  const mlOpsSeries = articles.filter(a => a.id.startsWith('mlops-'));

  const otherArticles = articles.filter(a =>
    !a.id.startsWith('agentops-') &&
    !a.id.startsWith('evals-') &&
    !a.id.startsWith('google-adk') &&
    !a.id.startsWith('mlops-') &&
    !a.id.startsWith('distributed-mas') &&
    a.date !== 'Coming Soon'
  );

  const displayedOthers = showAll ? otherArticles : otherArticles.slice(0, 6);

  const seriesList: Array<{
    key: Exclude<SeriesKey, null | 'more'>;
    articles: typeof articles;
    title: string;
    tagline: string;
    teaser: string;
    description: string;
    tags: string[];
    accent: string;
    reverse?: boolean;
    cap?: number;
  }> = [
    {
      key: 'agentops',
      articles: agentOpsSeries,
      title: 'Building Production-Ready Multi-Agent Systems on GCP',
      tagline: `${agentOpsSeries.length}-Part Series`,
      teaser: 'Multi-agent design, fullstack AI app, CI/CD, Terraform IaC, Model Armor, eval-gated canary deployments on GCP.',
      description: 'A 6-part series covering multi-agent design, fullstack AI app, CI/CD, Terraform IaC, resilience patterns, Model Armor, eval-gated canary deployments, and nightly regression on GCP.',
      tags: ['AgentOps', 'Google ADK', 'Vertex AI', 'Terraform', 'CI/CD', 'Production'],
      accent: 'coral',
    },
    {
      key: 'evals',
      articles: evalsSeries,
      title: 'Multi-Agent AI Evals: From ADK to Production',
      tagline: `${evalsSeries.length}-Part Series`,
      teaser: 'Eval infrastructure, routing validation, synthetic data, metrics, and eval-gated deployments for real ADK projects.',
      description: 'A 7-part journey from shipping a multi-agent system to knowing it actually works. Covers eval infrastructure, routing validation, synthetic data, metrics, and eval-gated deployments, built around a real open-source ADK project.',
      tags: ['Evals', 'Google ADK', 'Multi-Agent', 'CI/CD', 'Vertex AI', 'Testing'],
      accent: 'violet',
    },
    {
      key: 'distributed',
      articles: distributedMasSeries,
      title: "Building Distributed Multi-Agent Systems with Google's AI Stack",
      tagline: `${distributedMasSeries.length}-Part Series`,
      teaser: "Production-ready distributed multi-agent architectures using Google Cloud's AI infrastructure, A2A protocol, and orchestration patterns.",
      description: "A comprehensive series on building production-ready distributed multi-agent architectures using Google Cloud's AI infrastructure, A2A protocol, and modern orchestration patterns.",
      tags: ['Multi-Agent', 'Google Cloud', 'A2A Protocol', 'Distributed Systems', 'Orchestration'],
      accent: 'coral',
      reverse: true,
    },
    {
      key: 'adk',
      articles: adkSeries,
      title: 'Google ADK: From Local Development to Vertex AI Deployment',
      tagline: '9-Part Series',
      teaser: 'Everything from ADK fundamentals to production deployment of AI agents on Vertex AI.',
      description: 'A comprehensive guide covering everything from fundamentals to production deployment of AI agents using Google Agent Development Kit.',
      tags: ['Google ADK', 'Vertex AI', 'Agentic AI', 'Production', 'Multi-Agent'],
      accent: 'violet',
      reverse: true,
      cap: 9,
    },
    {
      key: 'mlops',
      articles: mlOpsSeries,
      title: 'Production-Ready MLOps on GCP',
      tagline: `${mlOpsSeries.length}-Part Series`,
      teaser: 'Terraform IaC, Kubeflow pipelines, CI/CD, model monitoring, and developer experience for production ML systems.',
      description: 'A deep-dive series on building production ML systems: Terraform IaC, Kubeflow pipelines, CI/CD, model monitoring, and developer experience.',
      tags: ['MLOps', 'Terraform', 'Kubeflow', 'CI/CD', 'Vertex AI', 'Monitoring'],
      accent: 'coral',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      {seriesList.map((s, i) => {
        const isOpen = openSeries === s.key;
        const list = s.cap ? s.articles.slice(0, s.cap) : s.articles;
        const ordered = s.reverse ? list.slice().reverse() : list;
        const isCoral = s.accent === 'coral';
        return (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
            className="card overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
              onClick={() => setOpenSeries(isOpen ? null : s.key)}
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="min-w-0">
                  <span className={`font-mono text-[11px] font-semibold uppercase tracking-wider2 block mb-1 ${isCoral ? 'text-coral' : 'text-violet'}`}>
                    {s.tagline}
                  </span>
                  <h3 className="text-[16px] md:text-[17px] font-bold text-ink leading-snug group-hover:text-coral transition-colors">
                    {s.title}
                  </h3>
                  {!isOpen && (
                    <p className="mt-1 text-[13px] text-ink-2 line-clamp-1 leading-relaxed">
                      {s.teaser}
                    </p>
                  )}
                </div>
              </div>
              <ChevronDown
                size={20}
                strokeWidth={1.8}
                className={`flex-shrink-0 text-ink-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-6 border-t border-line-soft pt-4">
                    <p className="text-[14px] leading-relaxed text-ink-2 mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ordered.map((article, idx) => {
                        const isPublished = article.url !== '#' && article.date !== 'Coming Soon';
                        return isPublished ? (
                          <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={article.title}
                            className="w-10 h-10 rounded-lg bg-mist-2 border border-line-soft grid place-items-center text-[13px] font-bold text-ink hover:bg-coral hover:text-paper hover:border-coral transition-colors"
                          >
                            {idx + 1}
                          </a>
                        ) : (
                          <div
                            key={article.id}
                            title={`${article.title} (Coming Soon)`}
                            className="w-10 h-10 rounded-lg bg-mist-2 border border-line-soft grid place-items-center text-[13px] font-bold text-ink-4 opacity-60 cursor-not-allowed"
                          >
                            {idx + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card overflow-hidden"
      >
        <button
          className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
          onClick={() => setOpenSeries(openSeries === 'more' ? null : 'more')}
        >
          <div className="flex items-center gap-3">
            <h3 className="text-[16px] md:text-[17px] font-bold text-ink">More articles</h3>
            <span className="font-mono text-[11px] text-ink-4 uppercase tracking-wider2">
              {otherArticles.length} pieces
            </span>
          </div>
          <ChevronDown
            size={20}
            strokeWidth={1.8}
            className={`flex-shrink-0 text-ink-4 transition-transform duration-300 ${openSeries === 'more' ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {openSeries === 'more' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-6 border-t border-line-soft pt-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedOthers.map((article, index) => (
                    <motion.a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group bg-paper border border-line-soft rounded-xl p-4 hover:border-coral hover:-translate-y-0.5 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider2 text-coral">
                          {article.category}
                        </span>
                        <span className="font-mono text-[10px] text-ink-4">·</span>
                        <span className="font-mono text-[10px] text-ink-4">{article.date}</span>
                      </div>
                      <h4 className="text-[14px] font-semibold text-ink leading-snug group-hover:text-coral transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-ink-2 group-hover:text-coral">
                        Read <ArrowRight size={12} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </motion.a>
                  ))}
                </div>

                {otherArticles.length > 6 && !showAll && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowAll(true)}
                      className="px-5 py-2 rounded-full bg-paper border border-line text-[13px] font-semibold text-ink-2 hover:border-ink transition-colors"
                    >
                      Show all ({otherArticles.length - 6} more)
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-6">
        <a
          href="https://medium.com/@saoussen.chaabnia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper text-[13px] font-semibold hover:bg-coral transition-colors"
        >
          View all on Medium
          <ExternalLink size={14} strokeWidth={1.9} />
        </a>
      </div>
    </motion.div>
  );
}

function PublicationsTab({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto flex flex-col gap-5"
    >
      {publications.map((pub, index) => (
        <motion.div
          key={pub.id}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative card p-6 md:p-7 overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-coral to-violet" />

          <div className="pl-2">
            <div className="inline-flex items-center gap-1.5 chip chip-pass mb-4">
              <BookOpen size={11} strokeWidth={2.2} />
              {pub.type}
            </div>

            <h3 className="text-[18px] md:text-[20px] font-bold text-ink leading-snug mb-2">
              {pub.title}
            </h3>

            <p className="text-[14px] text-ink-3 mb-1.5">
              {pub.authors.split('Saoussen Chaabnia').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-coral font-semibold">Saoussen Chaabnia</span>
                  </span>
                ) : (
                  part
                )
              )}
            </p>

            <p className="flex items-center gap-1.5 font-mono text-[12px] text-ink-4 mb-4">
              <Mic size={12} strokeWidth={1.9} />
              {pub.venue} · {pub.date}
            </p>

            {pub.abstract && (
              <p className="text-[13.5px] leading-relaxed text-ink-2 p-4 bg-mist-2 rounded-xl border-l-2 border-violet mb-4">
                {pub.abstract}
              </p>
            )}

            {pub.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {pub.links.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-paper border border-line text-[12.5px] font-semibold text-ink-2 hover:border-coral hover:text-coral transition-colors"
                  >
                    <ExternalLink size={12} strokeWidth={1.9} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

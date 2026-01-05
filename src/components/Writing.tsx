import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { articles, publications } from '../data';

type Tab = 'articles' | 'publications';

export function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<Tab>('articles');

  return (
    <section id="writing" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <p className="section-label">Writing</p>
          <h2 className="section-title">Articles & Publications</h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Sharing knowledge through technical writing and academic research
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'articles'
                ? 'bg-gradient-main text-white'
                : 'glass text-text-secondary hover:text-text-primary hover:border-accent-cyan'
            }`}
          >
            📝 Articles ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab('publications')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'publications'
                ? 'bg-gradient-main text-white'
                : 'glass text-text-secondary hover:text-text-primary hover:border-accent-cyan'
            }`}
          >
            📚 Publications
          </button>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'articles' ? (
            <ArticlesTab key="articles" isInView={isInView} />
          ) : (
            <PublicationsTab key="publications" isInView={isInView} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ArticlesTab({ isInView }: { isInView: boolean }) {
  const [showAll, setShowAll] = useState(false);

  // Featured series (Distributed Multi-Agent Systems)
  const distributedMasSeries = articles.filter(a => a.id.startsWith('distributed-mas'));
  // Featured series (Google ADK)
  const adkSeries = articles.filter(a => a.id.startsWith('google-adk'));
  // Upcoming MLOps series
  const mlOpsSeries = articles.filter(a => a.id.startsWith('mlops-'));
  // Other published articles (not in series and not coming soon)
  const otherArticles = articles.filter(a =>
    !a.id.startsWith('google-adk') &&
    !a.id.startsWith('mlops-') &&
    !a.id.startsWith('distributed-mas') &&
    a.date !== 'Coming Soon'
  );
  
  // Show 6 articles initially, or all if showAll is true
  const displayedOthers = showAll ? otherArticles : otherArticles.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Featured Series Banner - Distributed Multi-Agent Systems */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mb-6 p-6 glass rounded-2xl border border-accent-magenta/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-magenta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-accent-magenta" size={20} />
            <span className="text-accent-magenta font-semibold text-sm uppercase tracking-wide">New Series • {distributedMasSeries.filter(a => a.date !== 'Coming Soon').length} of {distributedMasSeries.length} Parts Published</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Building Distributed Multi-Agent Systems with Google's AI Stack</h3>
          <p className="text-text-secondary mb-4">
            A comprehensive series on building production-ready distributed multi-agent architectures using Google Cloud's AI infrastructure, A2A protocol, and modern orchestration patterns.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Multi-Agent', 'Google Cloud', 'A2A Protocol', 'Distributed Systems', 'Orchestration'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent-magenta/10 rounded-full text-xs text-accent-magenta font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {distributedMasSeries.map((article, i) => {
              const isPublished = article.date !== 'Coming Soon';
              return isPublished ? (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-sm font-bold hover:bg-accent-magenta hover:text-dark-primary transition-all duration-200"
                  title={article.title}
                >
                  {distributedMasSeries.length - i}
                </a>
              ) : (
                <div
                  key={article.id}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-sm font-bold text-text-muted opacity-50 cursor-not-allowed"
                  title={`${article.title} (Coming Soon)`}
                >
                  {distributedMasSeries.length - i}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Featured Series Banner - Google ADK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="mb-6 p-6 glass rounded-2xl border border-accent-cyan/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-accent-cyan" size={20} />
            <span className="text-accent-cyan font-semibold text-sm uppercase tracking-wide">Featured Series • 9 Parts</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Google ADK: From Local Development to Vertex AI Deployment</h3>
          <p className="text-text-secondary mb-4">
            A comprehensive guide covering everything from fundamentals to production deployment of AI agents using Google Agent Development Kit.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Google ADK', 'Vertex AI', 'Agentic AI', 'Production', 'Multi-Agent'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent-cyan/10 rounded-full text-xs text-accent-cyan font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {adkSeries.slice(0, 9).map((article, i) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-sm font-bold hover:bg-accent-cyan hover:text-dark-primary transition-all duration-200"
                title={article.title}
              >
                {9 - i}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Upcoming/Featured Series Banner - MLOps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-10 p-6 glass rounded-2xl border border-accent-violet/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            {mlOpsSeries.filter(a => a.date !== 'Coming Soon').length > 0 ? (
              <Sparkles className="text-accent-violet" size={20} />
            ) : (
              <span className="px-2 py-1 bg-accent-violet/20 rounded text-accent-violet text-xs font-bold uppercase">Coming Soon</span>
            )}
            <span className="text-accent-violet font-semibold text-sm uppercase tracking-wide">
              New Series • {mlOpsSeries.filter(a => a.date !== 'Coming Soon').length > 0 ? `${mlOpsSeries.filter(a => a.date !== 'Coming Soon').length} of ${mlOpsSeries.length} Parts Published` : '8 Parts'}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Production-Ready MLOps on GCP</h3>
          <p className="text-text-secondary mb-4">
            A deep-dive series on building production ML systems: Terraform IaC, Kubeflow pipelines, CI/CD, model monitoring, and developer experience.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['MLOps', 'Terraform', 'Kubeflow', 'CI/CD', 'Vertex AI', 'Monitoring'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent-violet/10 rounded-full text-xs text-accent-violet font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {mlOpsSeries.map((article, i) => {
              const isPublished = article.date !== 'Coming Soon';
              return isPublished ? (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-sm font-bold hover:bg-accent-violet hover:text-dark-primary transition-all duration-200"
                  title={article.title}
                >
                  {i + 1}
                </a>
              ) : (
                <div
                  key={article.id}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-sm font-bold text-text-muted opacity-50 cursor-not-allowed"
                  title={`${article.title} (Coming Soon)`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Other Articles */}
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span>📚</span> More Articles
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedOthers.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-dark-secondary border border-white/10 rounded-2xl overflow-hidden hover:border-accent-green hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,245,160,0.1)]"
          >
            {/* Image/Emoji Header */}
            <div className="h-40 bg-gradient-to-br from-dark-tertiary to-dark-secondary flex items-center justify-center text-5xl relative">
              <div className="absolute inset-0 bg-gradient-green opacity-10" />
              {article.emoji}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 glass rounded-full text-xs text-accent-green font-semibold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-text-muted text-xs font-mono">
                  {article.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-green transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-green font-medium text-sm group/link"
              >
                Read Article
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Show More Button */}
      {otherArticles.length > 6 && !showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 glass rounded-full hover:border-accent-cyan transition-all duration-300"
          >
            Show All Articles ({otherArticles.length - 6} more)
          </button>
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-10">
        <a
          href="https://medium.com/@saoussen.chaabnia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-gradient-main hover:border-transparent transition-all duration-300 group"
        >
          View All on Medium
          <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

function PublicationsTab({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {publications.map((pub, index) => (
        <motion.div
          key={pub.id}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-dark-secondary border border-white/10 rounded-2xl p-6 relative overflow-hidden hover:translate-x-2 hover:border-accent-gold transition-all duration-300"
        >
          {/* Gold accent bar */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-gold" />

          {/* Type Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 rounded-full text-accent-gold text-xs font-semibold uppercase tracking-wide mb-4">
            <FileText size={14} />
            {pub.type}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>

          {/* Authors */}
          <p className="text-text-secondary mb-2">
            {pub.authors.split('Saoussen Chaabnia').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-accent-cyan font-medium">Saoussen Chaabnia</span>
                </span>
              ) : (
                part
              )
            )}
          </p>

          {/* Venue */}
          <p className="text-text-muted text-sm mb-4 flex items-center gap-2">
            🎤 {pub.venue} • {pub.date}
          </p>

          {/* Abstract */}
          {pub.abstract && (
            <div className="text-text-secondary text-sm p-4 glass rounded-lg border-l-2 border-accent-violet mb-4">
              {pub.abstract}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {pub.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                <ExternalLink size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Layers, Sparkles, Cloud, Brain, Code2 } from 'lucide-react';

const SKILLS = [
  {
    Icon: Layers,
    title: 'AI Solution Architecture',
    detail: 'System design, technical strategy, feasibility assessment, product framing, responsible AI.',
  },
  {
    Icon: Bot,
    title: 'Agentic AI',
    detail: 'Google ADK, LangGraph, multi-agent orchestration, A2A, MCP, tool-use systems.',
  },
  {
    Icon: Sparkles,
    title: 'Generative AI & LLMs',
    detail: 'Gemini, GPT-4, Claude, Llama, Mistral, RAG, vector search, prompt engineering, LLMOps.',
  },
  {
    Icon: Cloud,
    title: 'MLOps & Cloud',
    detail: 'Vertex AI, GCP (expert), AWS, Kubeflow, MLflow, Terraform, Docker, cloud-native pipelines.',
  },
  {
    Icon: Brain,
    title: 'Machine Learning',
    detail: 'TensorFlow, PyTorch, scikit-learn, XGBoost, deep learning, NLP, CV, model deployment.',
  },
  {
    Icon: Code2,
    title: 'Data & Programming',
    detail: 'Python, SQL, Spark, BigQuery, FastAPI, TypeScript, React, data pipelines.',
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="bg-paper py-28 md:py-32 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-14"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow">Expertise</p>
            <h2 className="mt-4 font-display font-black text-display-2 text-ink">
              Where AI <span className="accent">meets production.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[16px] leading-relaxed text-ink-2 max-w-[520px]">
              Non-deterministic AI systems break in ways traditional software doesn't. I design for that:
              evaluation pipelines, agent architectures, and delivery practice that hold up after launch.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-14 md:gap-y-14">
          {SKILLS.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            >
              <div className="w-9 h-9 rounded-lg bg-rose/50 grid place-items-center mb-5">
                <Icon size={18} strokeWidth={1.7} className="text-coral" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">{title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-2 max-w-[340px]">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

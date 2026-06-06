import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, to }) {
  return (
    <motion.article
      className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(13,148,136,0.18)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-bg text-teal">
        <Icon size={24} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      {to && (
        <Link
          to={to}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:text-teal"
        >
          Explore <ArrowRight size={16} />
        </Link>
      )}
    </motion.article>
  );
}

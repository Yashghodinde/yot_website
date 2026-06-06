import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function PageHero({ label, title, accent, description, children }) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <header className="dark-grid pt-32 pb-20 text-white md:pt-40 md:pb-24">
      <motion.div
        className="section-shell max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {label && (
          <motion.div variants={item} className="mb-5">
            <span className="section-label bg-transparent text-teal-light">{label}</span>
          </motion.div>
        )}
        <motion.h1 variants={item} className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
          {parts[0]}
          {accent && <span className="block text-teal-light sm:inline">{accent}</span>}
          {parts[1]}
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div variants={item} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </header>
  );
}

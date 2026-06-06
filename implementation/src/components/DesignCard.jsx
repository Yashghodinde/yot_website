import { motion } from 'framer-motion';

export default function DesignCard({ image, client, type, square = false }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl bg-slate-200"
      style={{ aspectRatio: square ? '1 / 1' : '4 / 3' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={image}
        alt={`${client} ${type}`}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-5 opacity-0 transition duration-300 group-hover:bg-black/65 group-hover:opacity-100">
        <p className="text-lg font-bold text-white">{client}</p>
        <p className="mt-1 text-sm font-semibold text-teal-light">{type}</p>
        <p className="mt-3 text-sm font-semibold text-white">View Project</p>
      </div>
    </motion.article>
  );
}

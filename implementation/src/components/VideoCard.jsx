import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function VideoCard({ video, aspect = '16/9' }) {
  return (
    <motion.article
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-slate-950" style={{ aspectRatio: aspect }}>
        <iframe
          className="video-frame h-full"
          src={video.embedUrl}
          title={video.title || video.videoId}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-bold leading-6 text-slate-900">
          {video.title || video.videoId}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
          <span>{video.channelTitle}</span>
          {video.duration && <span>{video.duration}</span>}
          <a
            className="inline-flex items-center gap-1 text-teal-dark hover:text-teal"
            href={video.type === 'short' && video.shortsUrl ? video.shortsUrl : video.watchUrl}
            target="_blank"
            rel="noreferrer"
          >
            Watch <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

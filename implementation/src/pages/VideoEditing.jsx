import { motion } from 'framer-motion';
import { ArrowRight, Music, Building2, Landmark } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import VideoCard from '../components/VideoCard';
import portfolioData from '../data/youtube-portfolio-links.json';

const channelMeta = {
  '@MoneyPandits': { niche: 'Finance / Business', icon: Landmark, url: 'https://www.youtube.com/@MoneyPandits' },
  '@big_jaws': { niche: 'Music', icon: Music, url: 'https://www.youtube.com/@big_jaws' },
  '@Kropbook': { niche: 'Corporate', icon: Building2, url: 'https://www.youtube.com/@Kropbook' }
};

function LoadMoreGrid({ items, aspect, step = 4 }) {
  const [visible, setVisible] = useState(step);
  const shown = items.slice(0, visible);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((video) => (
          <VideoCard key={video.videoId} video={video} aspect={aspect} />
        ))}
      </div>
      {visible < items.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((value) => value + step)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal px-5 py-3 text-sm font-bold text-teal-dark hover:bg-teal-bg"
          >
            Load More <ArrowRight size={16} />
          </button>
        </div>
      )}
    </>
  );
}

export default function VideoEditing() {
  const { shorts, longVideos } = useMemo(() => {
    const channels = portfolioData.channels;
    return {
      shorts: channels.flatMap((channel) => channel.shorts).slice(0, 32),
      longVideos: channels.flatMap((channel) => channel.longVideos)
    };
  }, []);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        label="Video Editing"
        title="We Edit. You Grow."
        accent="Grow."
        description="From 60-second reels to 20-minute deep dives - we make every frame count."
      />

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="section-label">Short Form</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">
              Reels & Shorts That Hook in 3 Seconds
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Vertical content for Instagram, YouTube Shorts, and TikTok.
            </p>
          </AnimatedSection>
          <LoadMoreGrid items={shorts} aspect="9/16" />
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/yotproductions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-dark hover:text-teal"
            >
              See More on Instagram <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="section-label">Long Form</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">
              YouTube Videos That Keep Viewers Watching
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Storytelling-driven edits for finance, business, music, and corporate creators.
            </p>
          </AnimatedSection>
          <LoadMoreGrid items={longVideos} aspect="16/9" />
        </div>
      </section>

      <section className="bg-dark py-24 text-white">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label bg-transparent text-teal-light">Channels</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Channels We Manage</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {portfolioData.channels.map((channel) => {
              const meta = channelMeta[channel.handle];
              const Icon = meta.icon;
              return (
                <AnimatedSection key={channel.handle} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal-light">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold">{channel.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-teal-light">{meta.niche}</p>
                  <p className="mt-3 text-sm text-slate-400">{channel.counts.total} portfolio videos indexed</p>
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-teal-light"
                    href={meta.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Channel <ArrowRight size={16} />
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-teal py-20 text-white">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">Need top-tier video editing?</h2>
            <p className="mt-2 text-white/80">Let's build content that actually grows your channel.</p>
          </div>
          <a
            href="/#/"
            onClick={(event) => {
              event.preventDefault();
              window.location.hash = '#/';
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-teal-dark"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </motion.main>
  );
}

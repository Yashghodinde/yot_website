import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Clapperboard, Code2, Handshake, Layers, Palette, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import PortfolioTicker from '../components/PortfolioTicker';
import ServiceCard from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } }
};

const services = [
  {
    icon: Clapperboard,
    title: 'Video Editing',
    description: 'Short reels to long-form - edited to hook and convert.',
    to: '/video-editing'
  },
  {
    icon: Palette,
    title: 'Designing',
    description: 'Logos, social media, brand kits - visuals that speak.',
    to: '/designing'
  },
  {
    icon: Code2,
    title: 'Website & Support',
    description: 'Fast, beautiful websites built to grow your business.',
    to: '/web-support'
  },
  {
    icon: Handshake,
    title: 'Creator Outreach',
    description: 'We connect the right brands with the right creators.',
    to: '/creator-outreach'
  }
];

const whyUs = [
  {
    icon: Zap,
    title: 'Fast Turnarounds',
    text: 'We deliver edited content within 24-48 hours without sacrificing quality.'
  },
  {
    icon: TrendingUp,
    title: 'Quality That Converts',
    text: "Our edits are not just pretty - they are engineered to keep viewers watching."
  },
  {
    icon: Layers,
    title: 'One Studio, Full Pipeline',
    text: 'Brief to publish - we handle video, design, and web under one roof.'
  }
];

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="dark-grid relative flex min-h-screen items-center overflow-hidden pt-24 text-white">
        <motion.div
          className="section-shell relative z-10 max-w-5xl text-center"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={heroItem}>
            <span className="section-label bg-transparent text-teal-light">Video / Design / Web / Creator Outreach</span>
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
          >
            We Make Creators <span className="text-teal-light">Look Unstoppable.</span>
          </motion.h1>
          <motion.p variants={heroItem} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            YOT Productions is a full-service creative studio helping brands and creators grow through powerful content.
          </motion.p>
          <motion.div variants={heroItem} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-bold text-white hover:bg-teal-light"
            >
              Get in Touch <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/10"
            >
              See Our Work <ArrowDown size={18} />
            </button>
          </motion.div>
        </motion.div>
        <ArrowDown className="bounce-soft absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60" size={28} />
      </section>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="section-label">What We Do</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">
              One Studio. Every Service You Need.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              From raw footage to viral content - we handle it all.
            </p>
          </AnimatedSection>
          <AnimatedSection className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section id="work" className="bg-dark py-24 text-white">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label bg-transparent text-teal-light">Portfolio</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Our Work</h2>
          </AnimatedSection>
        </div>
        <PortfolioTicker />
      </section>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="grid gap-10 md:grid-cols-3">
            <StatCounter number={194} suffix="+" label="Videos Edited" />
            <StatCounter number="5 Years" textValue="5 Years" label="In Business" />
            <StatCounter number={3} label="Channels Managed" />
          </AnimatedSection>
          <AnimatedSection className="mx-auto mt-12 max-w-3xl text-center text-base leading-8 text-slate-600">
            YOT Productions was founded by Yash and Kunal in New Panvel, Navi Mumbai. We started as a video editing
            studio and grew into a full creative agency serving brands across India.
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Why Us</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">Why Choose YOT?</h2>
          </AnimatedSection>
          <div className="grid gap-6">
            {whyUs.map((item, index) => (
              <AnimatedSection key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className={`flex flex-col gap-5 md:flex-row md:items-center ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-bg text-teal">
                    <item.icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{item.title}</h3>
                    <p className="mt-2 max-w-3xl text-base leading-7 text-slate-500">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="subtle-teal-panel py-20 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-2 md:divide-x md:divide-white/10">
          <AnimatedSection className="md:pr-10">
            <h2 className="text-3xl font-extrabold">Are you a Brand?</h2>
            <p className="mt-3 text-slate-400">Reach new audiences through authentic creator partnerships.</p>
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-bold text-white"
            >
              Get in Touch <ArrowRight size={16} />
            </button>
          </AnimatedSection>
          <AnimatedSection className="md:pl-10">
            <h2 className="text-3xl font-extrabold">Are you a Creator?</h2>
            <p className="mt-3 text-slate-400">Get paid collaboration opportunities with top brands.</p>
            <Link
              to="/creator-outreach"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Join as Creator <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="bg-[#f8fafb] py-24">
        <div className="section-shell max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </motion.main>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BarChart3, CircleDollarSign, Target, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import CreatorForm from '../components/CreatorForm';
import PageHero from '../components/PageHero';

const brandSteps = [
  ['Tell us your goal', 'Target audience, budget, campaign type.'],
  ['We match you with creators', 'Handpicked from our creator network.'],
  ['Content gets created', 'Authentic, on-brand collaborations.'],
  ['You track the growth', 'Reach, impressions, conversions.']
];

const benefits = [
  { icon: BarChart3, title: 'Boost Engagement', description: 'Leverage creator authenticity to drive meaningful interactions.' },
  { icon: Users, title: 'Expand Reach', description: 'Access established audiences through trusted creators.' },
  { icon: CircleDollarSign, title: 'Increase Conversions', description: 'Turn creator influence into measurable sales growth.' }
];

export default function CreatorOutreach() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        label="Creator Outreach"
        title="Amplify Through Authentic Voices."
        description="We bridge brands with creators who genuinely connect with your audience."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-teal/40 bg-teal/10 px-4 py-2 text-sm font-bold text-teal-light">
            For Brands
          </span>
          <span className="rounded-full border border-teal/40 bg-teal/10 px-4 py-2 text-sm font-bold text-teal-light">
            For Creators
          </span>
        </div>
      </PageHero>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="section-label">For Brands</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">How It Works</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {brandSteps.map(([title, text], index) => (
              <AnimatedSection key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-5xl font-extrabold text-teal">{index + 1}</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <AnimatedSection key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-bg text-teal">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-24 text-white">
        <AnimatedSection className="section-shell max-w-4xl text-center">
          <span className="section-label bg-transparent text-teal-light">For Creators</span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Are you a Creator?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Join our network and get matched with brands that fit your niche.
          </p>
          <div className="mt-8 grid gap-3 text-left md:grid-cols-3">
            {['Paid collaboration opportunities', 'Brands matched to your niche', 'Simple, no-BS process'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold">
                <BadgeCheck className="mr-2 inline text-teal-light" size={17} /> {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Start Here</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">Choose Your Path</h2>
          </AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedSection className="rounded-2xl bg-teal p-6 text-white shadow-teal md:p-8">
              <Target size={32} />
              <h3 className="mt-5 text-2xl font-extrabold">I'm a brand looking for creators</h3>
              <p className="mt-3 text-white/80">Share your campaign brief and we will help match the right creators.</p>
              <div className="mt-6 rounded-xl bg-white p-4">
                <ContactForm defaultService="Creator Outreach" compact />
              </div>
            </AnimatedSection>
            <AnimatedSection className="rounded-2xl border border-teal/30 bg-dark p-6 text-white md:p-8">
              <Users size={32} className="text-teal-light" />
              <h3 className="mt-5 text-2xl font-extrabold">I'm a creator looking for work</h3>
              <p className="mt-3 text-slate-400">Apply to join the creator network for paid collaborations.</p>
              <div className="mt-6 rounded-xl bg-white p-4">
                <CreatorForm />
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/yotproductions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-dark hover:text-teal"
            >
              Message us on Instagram <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Clapperboard, Code2, Palette, Rocket, Target, Users, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const values = [
  { icon: Zap, title: 'Move Fast', description: 'We ship quickly and learn from real work.' },
  { icon: Target, title: 'Quality First', description: 'Every deliverable meets a high bar.' },
  { icon: Users, title: 'Team Over Ego', description: 'We win together or not at all.' }
];

const roles = [
  {
    icon: Clapperboard,
    title: 'Video Editor',
    description: 'Edit short and long-form content for YouTube and social media.',
    form: 'https://forms.gle/nxonjtpSJvXeVJRs8'
  },
  {
    icon: Palette,
    title: 'Designer',
    description: 'Create brand identities, social graphics, and visual systems.',
    form: 'https://forms.gle/x7AzJ8wrrRrA1qJv5'
  },
  {
    icon: Code2,
    title: 'Web & Software Developer',
    description: 'Build fast, beautiful websites and web applications.',
    form: 'https://forms.gle/xHcQhsnFFyGzw2s56'
  },
  {
    icon: Rocket,
    title: 'Creator / Content Producer',
    description: 'Create and grow content across YouTube and social platforms.',
    form: 'https://forms.gle/fsCXfvzSK61Jvwax6'
  }
];

export default function Careers() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        label="Careers"
        title="Join the Studio."
        accent="Studio."
        description="We're always looking for talented people who love what they do."
      />

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Culture</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">How We Work</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <AnimatedSection key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-bg text-teal">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Open Roles</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">Apply to Work With YOT</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <AnimatedSection key={role.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-bg text-teal">
                  <role.icon size={30} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{role.description}</p>
                <a
                  href={role.form}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-teal px-4 py-2.5 text-sm font-bold text-teal-dark hover:bg-teal hover:text-white"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

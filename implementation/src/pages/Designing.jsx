import { motion } from 'framer-motion';
import { ArrowRight, Brush, FileText, Image, Map, MonitorSmartphone, Palette, PenTool } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import DesignCard from '../components/DesignCard';
import PageHero from '../components/PageHero';

const brandProjects = [
  { image: '/assets/design/dd1.png', client: 'Jan Bima', type: 'Logo & Stationery Design' },
  { image: '/assets/design/dd5.png', client: 'LODHA', type: 'Industrial Park Map' },
  { image: '/assets/design/dd4.png', client: 'Asian Paint', type: 'Paint Ezzy Bot' },
  { image: '/assets/design/dd6.png', client: 'Asian Paint', type: 'Ezzy Bot Design' }
];

const socialProjects = ['d1.png', 'd2.png', 'd3.png', 'd4.png', 'd6.png', 'd8.png'].map((file, index) => ({
  image: `/assets/design/${file}`,
  client: `Social Creative ${index + 1}`,
  type: 'Social Media Design'
}));

const services = [
  { icon: PenTool, title: 'Logo Design', description: 'Custom logos that represent your brand.' },
  { icon: Palette, title: 'Brand Identity', description: 'Full visual systems: colors, fonts, and guidelines.' },
  { icon: MonitorSmartphone, title: 'Social Media Graphics', description: 'Posts, stories, reel covers, and carousels.' },
  { icon: Image, title: 'Thumbnails', description: 'YouTube thumbnails that get clicked.' },
  { icon: FileText, title: 'Print & Stationery', description: 'Business cards, letterheads, and brochures.' },
  { icon: Map, title: 'Industrial Design', description: 'Maps, layouts, and technical visual documents.' }
];

export default function Designing() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        label="Designing"
        title="Designs That Do the Talking."
        accent="Do the Talking."
        description="Brand identity, social media, print - every pixel purposeful."
      />

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="section-label">For Brands</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">
              Visual Identity That Builds Trust
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Logos, brand kits, stationery, maps - we craft the visual DNA of your brand.
            </p>
          </AnimatedSection>
          <AnimatedSection className="grid gap-5 md:grid-cols-2">
            {brandProjects.map((project) => (
              <DesignCard key={`${project.client}-${project.type}`} {...project} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 max-w-3xl">
            <span className="section-label">For Socials</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">
              Content That Stops the Scroll
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Thumbnails, posts, stories, carousels - designed to get attention.
            </p>
          </AnimatedSection>
          <AnimatedSection className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {socialProjects.map((project) => (
              <DesignCard key={project.image} {...project} square />
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Design Services</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">What We Design</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <AnimatedSection key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-bg text-teal">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">Want designs that leave an impact?</h2>
            <p className="mt-2 text-slate-400">Brand, social, print, and digital design under one roof.</p>
          </div>
          <a
            href="/#/"
            onClick={(event) => {
              event.preventDefault();
              window.location.hash = '#/';
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-bold text-white"
          >
            Let's Work Together <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </motion.main>
  );
}

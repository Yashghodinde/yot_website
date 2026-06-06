import { motion } from 'framer-motion';
import { Briefcase, Code2, GalleryHorizontal, Rocket, ShoppingCart, SlidersHorizontal, Wrench } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';

const serviceTypes = [
  { icon: Briefcase, title: 'Business Websites', description: 'Professional online presence with lead generation features.' },
  { icon: GalleryHorizontal, title: 'Portfolio Websites', description: 'Showcase your work with stunning visual displays.' },
  { icon: ShoppingCart, title: 'E-commerce Stores', description: 'Secure shopping experiences with payment integration.' },
  { icon: Rocket, title: 'Landing Pages', description: 'High-converting pages for campaigns and product launches.' },
  { icon: SlidersHorizontal, title: 'Custom Web Apps', description: 'Tailored applications for unique business needs.' },
  { icon: Wrench, title: 'Website Maintenance', description: 'Updates, bug fixes, and performance optimization.' }
];

const process = [
  { title: 'Discovery', text: 'We understand your goals and audience.' },
  { title: 'Design', text: 'Wireframes and design approval.' },
  { title: 'Build', text: 'Clean code, fast loading, SEO ready.' },
  { title: 'Launch', text: 'Deployed, live, and supported.' }
];

export default function WebSupport() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        label="Web Support"
        title="Your Digital Home, Built Right."
        description="Fast, clean websites that represent your brand and drive real growth."
      />

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-12 text-center">
            <span className="section-label">Services</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">What We Build</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <AnimatedSection className="mb-14 text-center">
            <span className="section-label">Process</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl text-slate-900">How We Work</h2>
          </AnimatedSection>
          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-slate-200 md:block" />
            {process.map((step, index) => (
              <AnimatedSection key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-6xl font-extrabold text-teal">{index + 1}</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-dark py-20 text-white">
        <AnimatedSection className="section-shell max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Code2 size={28} />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold">
            Ready to establish your digital presence?
          </h2>
          <p className="mt-3 text-white/80">
            Let's create a website that truly represents your brand and drives growth.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-[#f8fafb] py-24">
        <div className="section-shell max-w-2xl">
          <ContactForm defaultService="Website" />
        </div>
      </section>
    </motion.main>
  );
}

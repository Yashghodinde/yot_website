import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Video Editing', to: '/video-editing' },
  { label: 'Designing', to: '/designing' },
  { label: 'Web Support', to: '/web-support' },
  { label: 'Creator Outreach', to: '/creator-outreach' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const navBg = useTransform(scrollY, [0, 60], ['rgba(9,9,11,0)', 'rgba(255,255,255,0.92)']);
  const textColor = useTransform(scrollY, [0, 60], ['#ffffff', '#0f172a']);
  const navHeight = useTransform(scrollY, [0, 60], ['72px', '60px']);
  const borderColor = useTransform(scrollY, [0, 60], ['rgba(226,232,240,0)', 'rgba(226,232,240,1)']);

  const goToContact = () => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      style={{ backgroundColor: navBg, height: navHeight, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="section-shell flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/assets/logo/YOT_no_bg3.png" alt="YOT Productions" className="h-10 w-10 object-contain" />
          <motion.span style={{ color: textColor }} className="text-sm font-extrabold">
            <span className="text-teal-light">YOT</span> PRODUCTIONS
          </motion.span>
        </Link>

        <motion.nav style={{ color: textColor }} className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-teal ${isActive ? 'text-teal' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.nav>

        <button
          type="button"
          onClick={goToContact}
          className="hidden items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-bold text-white shadow-teal transition hover:bg-teal-light md:inline-flex"
        >
          Get in Touch <ArrowRight size={16} />
        </button>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 md:hidden"
          style={{ color: textColor }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-dark text-white md:hidden"
          >
            <div className="section-shell py-5">
              <div className="grid gap-1">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 text-base font-semibold hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <button
                type="button"
                onClick={goToContact}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-4 py-3 text-sm font-bold text-white"
              >
                Get in Touch <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

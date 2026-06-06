import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark py-16 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/logo/YOT_no_bg3.png" alt="YOT Productions" className="h-12 w-12 object-contain" />
            <p className="text-sm font-extrabold">
              <span className="text-teal-light">YOT</span> PRODUCTIONS
            </p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            We make creators look unstoppable.
          </p>
          <a
            href="https://www.instagram.com/yotproductions"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-light"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-white">Services</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <Link className="hover:text-teal-light" to="/video-editing">Video Editing</Link>
            <Link className="hover:text-teal-light" to="/designing">Designing</Link>
            <Link className="hover:text-teal-light" to="/web-support">Web Support</Link>
            <Link className="hover:text-teal-light" to="/creator-outreach">Creator Outreach</Link>
            <Link className="hover:text-teal-light" to="/careers">Careers</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-white">Get in Touch</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <a className="inline-flex items-center gap-2 hover:text-teal-light" href="tel:+919757271093">
              <Phone size={15} /> Yash +91 97572 71093
            </a>
            <a className="inline-flex items-center gap-2 hover:text-teal-light" href="tel:+918530680455">
              <Phone size={15} /> Kunal +91 85306 80455
            </a>
            <a className="inline-flex items-center gap-2 hover:text-teal-light" href="mailto:contact@yotproductions.com">
              <Mail size={15} /> contact@yotproductions.com
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-teal-light"
              href="https://www.google.com/maps/search/?api=1&query=New%20Panvel%20Navi%20Mumbai"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} /> New Panvel, Navi Mumbai
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>(c) 2026 YOT Productions</p>
        <p>Instagram / Location</p>
      </div>
    </footer>
  );
}

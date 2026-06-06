import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Careers from './pages/Careers';
import CreatorOutreach from './pages/CreatorOutreach';
import Designing from './pages/Designing';
import Home from './pages/Home';
import VideoEditing from './pages/VideoEditing';
import WebSupport from './pages/WebSupport';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/web-support" element={<WebSupport />} />
          <Route path="/creator-outreach" element={<CreatorOutreach />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

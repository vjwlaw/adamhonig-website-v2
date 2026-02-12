import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/main/HomePage';
import MediaPage from './components/main/MediaPage';
import FAQPage from './components/main/FAQPage';
import ShmeggeggyLanding from './components/shmeggeggy/ShmeggeggyLanding';
import ShmeggeggyReview from './components/shmeggeggy/ShmeggeggyReview';
import AlanHonigMemorial from './components/memorial/AlanHonigMemorial';
import CeliaHonigMemorial from './components/memorial/CeliaHonigMemorial';
import GerryNewmanMemorial from './components/memorial/GerryNewmanMemorial';
import NotFound from './components/layout/NotFound';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function GARouteTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-MGEHLC10VJ', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GARouteTracker />
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/media" element={<MainLayout><MediaPage /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQPage /></MainLayout>} />
        <Route path="/shmeggeggy" element={<ShmeggeggyLanding />} />
        <Route path="/shmeggeggy/review" element={<ShmeggeggyReview />} />
        <Route path="/in-memory/alan-honig" element={<AlanHonigMemorial />} />
        <Route path="/in-memory/celia-honig" element={<CeliaHonigMemorial />} />
        <Route path="/in-memory/gerry-newman" element={<GerryNewmanMemorial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

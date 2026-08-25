import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceArea from "@/pages/ServiceArea";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

let lenisInstance = null;

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisInstance = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen bg-navy font-sans text-slate-50">
          <div className="grain-overlay" aria-hidden="true" />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-area" element={<ServiceArea />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#0A1121",
                border: "1px solid rgba(229,169,60,0.35)",
                color: "#F8FAFC",
              },
            }}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

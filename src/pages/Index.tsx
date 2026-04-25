import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else if (attempt < 20) {
          setTimeout(() => tryScroll(attempt + 1), 100);
        }
      };
      // Wait a tick so layout (and Calendly iframe) has time to mount
      setTimeout(() => tryScroll(), 300);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <VideoShowcase />
        <Testimonials />
        <Portfolio />
        <CTA />
        <CalendlyEmbed sectionId="reserver" />
        <ContactForm sectionId="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

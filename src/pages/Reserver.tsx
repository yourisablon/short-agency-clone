import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { useEffect } from "react";

const Reserver = () => {
  useEffect(() => {
    document.title = "Réserve ton appel | Agence Noa";
    const desc = "Réserve ton appel découverte de 20 minutes avec l'Agence Noa. Sans engagement.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/reserver");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <CalendlyEmbed sectionId="reserver" />
      </main>
      <Footer />
    </div>
  );
};

export default Reserver;

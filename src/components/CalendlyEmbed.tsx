import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  sectionId?: string;
}

const CALENDLY_URL = "https://calendly.com/youri-sablon/20min?hide_gdpr_banner=1";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

const CalendlyEmbed = ({ sectionId }: CalendlyEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryInit = () => {
      if (cancelled) return;
      const w = (window as any).Calendly;
      const el = containerRef.current;
      if (el && w && typeof w.initInlineWidget === "function") {
        if (!el.querySelector("iframe")) {
          el.innerHTML = "";
          w.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
        }
        return;
      }
      if (attempts++ < 50) setTimeout(tryInit, 100);
    };

    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;
    if (!existing) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = tryInit;
      document.body.appendChild(script);
    }
    tryInit();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id={sectionId} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Réserve ton <span className="text-primary">appel</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Choisis un créneau qui te convient. 20 minutes, sans engagement.
          </p>
        </div>
        <div
          className="calendly-inline-widget mx-auto"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
};

export default CalendlyEmbed;

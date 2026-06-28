import { useEffect } from "react";

interface CalendlyEmbedProps {
  sectionId?: string;
}

const CALENDLY_URL = "https://calendly.com/youri-sablon/20min?hide_gdpr_banner=1";

const CalendlyEmbed = ({ sectionId }: CalendlyEmbedProps) => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const initWidget = () => {
      const w = (window as any).Calendly;
      const el = document.querySelector(".calendly-inline-widget") as HTMLElement | null;
      if (w && el && !el.querySelector("iframe")) {
        w.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
      }
    };
    const existing = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (existing) {
      initWidget();
      return;
    }
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);
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

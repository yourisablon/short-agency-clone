interface CalendlyEmbedProps {
  sectionId?: string;
}

const CALENDLY_BASE_URL = "https://calendly.com/youri-sablon/20min";

const CalendlyEmbed = ({ sectionId }: CalendlyEmbedProps) => {
  const embedDomain =
    typeof window !== "undefined" ? window.location.hostname : "developpetoncab.com";
  const calendlyUrl = `${CALENDLY_BASE_URL}?hide_gdpr_banner=1&embed_domain=${encodeURIComponent(
    embedDomain
  )}&embed_type=Inline`;

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
        <iframe
          title="Réserver un appel Calendly"
          src={calendlyUrl}
          className="mx-auto w-full max-w-4xl border-0"
          style={{ minWidth: "320px", height: "760px" }}
        />
      </div>
    </section>
  );
};

export default CalendlyEmbed;

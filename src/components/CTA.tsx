import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 text-center overflow-hidden border-2 border-border/50"
            style={{ background: 'var(--gradient-card)' }}
          >
            <div
              className="absolute inset-0 opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.4), transparent 70%)' }}
            />

            <div className="relative z-10">
              <p className="text-accent font-bold text-sm tracking-wider uppercase mb-6">
                La prochaine étape
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Un appel de <span className="text-primary">20 minutes</span>. Sans engagement.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                On regarde ensemble si ton cabinet a le potentiel pour que ce système fonctionne, et je te dis honnêtement si je peux t'aider.
              </p>

              <div className="flex flex-col items-center gap-3">
                <Button
                  type="button"
                  size="lg"
                  onClick={() => {
                    const el = document.getElementById("reserver");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 sm:px-8 md:px-12 py-5 md:py-7 text-sm sm:text-base md:text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Réserver mon créneau
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Youri Sablon, Développe ton Cab'.<br />
                  Spécialiste acquisition locale pour avocats libéraux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

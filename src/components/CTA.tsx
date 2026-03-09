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
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-8 md:mb-12 leading-tight">
                On regarde si ça peut fonctionner pour vous.
              </h2>

              <div className="flex flex-col items-center gap-3">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 sm:px-8 md:px-12 py-5 md:py-7 text-sm sm:text-base md:text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                    Remplir mon établissement
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Appel rapide pour analyser votre situation.
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

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

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
            {/* Animated glow */}
            <div 
              className="absolute inset-0 opacity-30 blur-3xl"
              style={{ 
                background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.4), transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="inline-block mb-6 md:mb-8">
                <span className="text-accent font-bold text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-2 rounded-full bg-accent/20 border border-accent/30 whitespace-nowrap">
                  Contact
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Parlons de votre projet
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-2">
                Expliquez-nous votre activité et vos objectifs. Nous vous dirons clairement si et comment nous pouvons vous aider.
              </p>

              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 sm:px-8 md:px-12 py-5 md:py-7 text-sm sm:text-base md:text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 mb-8 md:mb-12 w-full sm:w-auto"
              >
                <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                  Prendre contact
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-start sm:items-center gap-3 sm:gap-8 text-sm mx-auto w-fit">
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">Premier appel gratuit</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">Réponse rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
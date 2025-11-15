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
            className="relative rounded-[3rem] p-12 md:p-16 text-center overflow-hidden border-2 border-border/50"
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
              <div className="inline-block mb-8">
                <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                  Commencez maintenant
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                PRÊT À PASSER
                <span className="block text-primary mt-2">AU NIVEAU SUPÉRIEUR ?</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
                Réservez votre appel découverte gratuit et découvrez comment nous pouvons transformer votre contenu vidéo.
              </p>

              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 py-7 text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 mb-12"
              >
                <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                  Réserver mon appel gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">Premier appel gratuit</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
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

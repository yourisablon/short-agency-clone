import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-primary">Faites exploser votre marque</span>
            <br />
            <span className="text-foreground">avec des vidéos, pubs et automatisations</span>
            <br />
            <span className="text-foreground">qui cartonnent.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la création à la diffusion, on vous aide à générer plus de vues, plus de clients et plus de ventes — sans perdre de temps.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                Je veux faire briller ma marque →
              </a>
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Publicité & organique
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                Automatisations incluses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

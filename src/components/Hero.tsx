import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight uppercase">
            On remplit votre établissement avec Instagram
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium">
            Un système conçu pour générer des réservations chaque semaine.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
            Sans que vous ayez à créer du contenu vous-même.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 py-7 text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                Remplir mon établissement
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Appel rapide pour voir si ça peut fonctionner pour vous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center space-y-8 animate-scale-in relative overflow-hidden"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-primary-foreground mb-6">
              Prêt à faire décoller
              <br />
              votre entreprise ?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Rejoignez les +200 entreprises qui ont fait confiance à Agence content pour transformer leur marketing vidéo.
            </p>

            <Button 
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-sm text-primary-foreground/80 mt-4">
              Premier appel gratuit • Sans engagement • Réponse sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA card with ultra-modern design */}
          <div className="relative animate-slide-up">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-20 rounded-[3rem] blur-3xl animate-pulse-glow" />
            
            {/* Main card */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border/50 backdrop-blur-sm shadow-2xl">
              {/* Gradient background */}
              <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }} />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
              
              {/* Content */}
              <div className="relative z-10 p-12 md:p-20 text-center space-y-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Dernière étape</span>
                </div>
                
                {/* Heading */}
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                  Prêt à booster
                  <br />
                  votre business
                  <br />
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-2xl">
                    avec la vidéo ?
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                  Rejoignez les marques qui font confiance à AGENCE NOA pour créer, diffuser et automatiser leurs contenus vidéo.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    asChild
                    size="lg"
                    className="group relative bg-white text-primary hover:bg-white hover:scale-110 rounded-2xl px-12 py-8 text-xl font-black shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-3">
                        Réserver un appel découverte
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </a>
                  </Button>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                  {[
                    "Premier appel gratuit",
                    "Sans engagement",
                    "Réponse en 24h"
                  ].map((text, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-sm font-semibold">{text}</span>
                    </div>
                  ))}
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

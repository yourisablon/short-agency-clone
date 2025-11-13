import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Animated background mesh */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-mesh)" }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Main heading with staggered animation */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
                Faites exploser
              </span>
              <br />
              <span className="text-foreground">votre marque</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-foreground/80">
              avec des vidéos, pubs et automatisations
              <br />
              <span className="text-primary">qui cartonnent.</span>
            </p>
          </div>

          {/* Description with glass effect */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block backdrop-blur-sm bg-background/40 border border-border/50 rounded-2xl px-8 py-4 shadow-lg">
              <p className="text-lg md:text-xl text-foreground max-w-3xl">
                De la création à la diffusion, on vous aide à générer plus de vues, plus de clients et plus de ventes — sans perdre de temps.
              </p>
            </div>
          </div>

          {/* CTA Button with enhanced styling */}
          <div className="flex flex-col items-center gap-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              asChild
              size="lg"
              className="relative group bg-primary hover:bg-primary text-primary-foreground rounded-2xl px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-[0_20px_80px_-15px_hsl(var(--primary))] transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Je veux faire briller ma marque →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </a>
            </Button>

            {/* Benefits badges with modern design */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                "Sans engagement",
                "Publicité & organique",
                "Automatisations incluses"
              ].map((text, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-background/60 backdrop-blur-md border border-border/50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

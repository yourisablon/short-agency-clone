import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Video, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      {/* Floating icons */}
      <div className="absolute top-1/4 left-[10%] animate-float">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border/50">
          <Play className="w-8 h-8 text-foreground" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-[15%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border/50">
          <Video className="w-8 h-8 text-foreground" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-[15%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border/50">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-[12%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border/50">
          <TrendingUp className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - ultra bold */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            <span className="block">VIDÉO & MARKETING</span>
            <span className="block mt-2">
              <span className="text-foreground">POUR </span>
              <span className="text-primary">MARQUES</span>
            </span>
            <span className="block mt-2">
              <span className="text-foreground">& </span>
              <span className="text-accent">CRÉATEURS</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
            Travaillez avec des experts vidéo et marketing et propulsez votre contenu au niveau supérieur dès <span className="text-accent font-bold">100€</span> par vidéo.
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 py-7 text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">Livraison rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="font-medium">Qualité professionnelle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="font-medium">Support dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

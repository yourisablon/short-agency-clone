import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video player mockup */}
          <div className="relative group">
            <div 
              className="relative aspect-video rounded-3xl overflow-hidden border-4 border-border/50 shadow-2xl"
              style={{ background: 'var(--gradient-card)' }}
            >
              {/* Video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group-hover:shadow-primary/50">
                  <Play className="w-10 h-10 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating element */}
            <div className="absolute -right-4 -bottom-4 bg-card border-4 border-background rounded-2xl p-6 shadow-2xl animate-float">
              <div className="text-4xl font-bold text-primary">50€</div>
              <div className="text-sm text-muted-foreground font-medium">Par vidéo</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Notre expertise
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              CONTENU VIDÉO
              <span className="block text-primary mt-2">QUI CONVERTIT</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="font-medium">
                Des vidéos publicitaires qui captivent votre audience et génèrent des résultats mesurables.
              </p>
              
              <p>
                Notre équipe d'experts crée du contenu optimisé pour les réseaux sociaux, conçu pour maximiser l'engagement et les conversions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground font-medium">Livraison moyenne</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

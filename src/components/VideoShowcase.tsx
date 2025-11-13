import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Video player with modern glass effect */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-50" />
            
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-3xl overflow-hidden border border-border/50 backdrop-blur-sm group cursor-pointer shadow-2xl hover:shadow-[0_25px_80px_-15px_hsl(var(--primary)/0.3)] transition-all duration-500">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }} />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                    <Play className="w-10 h-10 text-primary-foreground ml-1.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Text content with modern layout */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-right">
              <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Nous créons des vidéos
                <br />
                <span className="text-primary">qui convertissent</span>
              </h3>
            </div>
            
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border/50 backdrop-blur-sm">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  et on vous aide à les faire cartonner grâce à la pub et l'automatisation.
                </p>
                <p className="text-xl font-bold text-primary mt-4">
                  Moins d'efforts, plus de résultats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

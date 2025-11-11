import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="text-center mt-12 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Nous créons des vidéos qui convertissent,
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              et on vous aide à les faire cartonner grâce à la pub et l'automatisation.
              <br />
              Moins d'efforts, plus de résultats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

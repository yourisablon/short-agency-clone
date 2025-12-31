import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight tracking-tight">
            Des vidéos claires et structurées pour donner envie de passer à l'action.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Nous accompagnons les PME et les marques lifestyle dans la création de vidéos utiles, pensées pour transmettre le bon message et soutenir leur activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
            >
              <a href="https://calendly.com/youri-sablon" target="_blank" rel="noopener noreferrer">
                Parler de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-border hover:bg-secondary"
            >
              <a href="#methode">
                Voir notre méthode
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

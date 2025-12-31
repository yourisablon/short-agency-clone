import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Accompagnement vidéo
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
            <p>
              Nous proposons un accompagnement sur mesure, adapté à votre activité et à vos objectifs.
            </p>
            <p>
              L'idée n'est pas de produire beaucoup de vidéos, mais de produire les bonnes.
            </p>
          </div>

          <Button 
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
          >
            <a href="https://calendly.com/youri-sablon" target="_blank" rel="noopener noreferrer">
              Discuter de votre projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offer;

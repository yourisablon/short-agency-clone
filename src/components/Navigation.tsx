import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            short.
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#etudes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Étude de cas
            </a>
            <a href="#avis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Avis clients
            </a>
          </div>

          <Button 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 font-medium"
          >
            Prendre un rendez-vous
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

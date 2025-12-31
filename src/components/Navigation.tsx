import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="hover:opacity-70 transition-opacity">
            <span className="text-xl font-semibold text-foreground tracking-tight">NOA</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#methode" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Méthode
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <Button 
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
          >
            <a href="https://calendly.com/youri-sablon" target="_blank" rel="noopener noreferrer">
              Parler de votre projet
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

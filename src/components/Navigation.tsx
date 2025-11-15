import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold text-foreground tracking-tight">NOA</div>
            <div className="text-xs font-medium text-muted-foreground -mt-1">NOT ONLY ADS</div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Accueil
            </a>
            <a href="#portfolio" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#avis" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Avis clients
            </a>
          </div>

          <Button 
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-bold shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            <a href="https://calendly.com/youri-sablon?fbclid=PAZXh0bgNhZW0CMTEAAaf_-JPG6bCJtXlGibEezpsskIEeUtgAUTVU1R3IGYsC2PvFWOq50aR9lX4EZg_aem_bObIZMDWq0Ti5c0SKolc6w" target="_blank" rel="noopener noreferrer">
              Prendre RDV
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

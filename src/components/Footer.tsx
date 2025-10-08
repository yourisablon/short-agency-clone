import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">AGENCE CONTENT</h3>
            <p className="text-sm text-background/70">
              L'agence vidéo verticale N°1 en France
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Accueil</a></li>
              <li><a href="#portfolio" className="text-background/70 hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="#avis" className="text-background/70 hover:text-background transition-colors">Avis clients</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Vidéos publicitaires</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contenu organique</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">VSL & Sales</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Social Media</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">IA & 3D</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:youri.sablon@gmail.com" className="text-background/70 hover:text-background transition-colors">youri.sablon@gmail.com</a></li>
              <li><a href="tel:+33658370994" className="text-background/70 hover:text-background transition-colors">+33 6 58 37 09 94</a></li>
              <li>
                <a 
                  href="https://www.instagram.com/yourisablon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 AGENCE CONTENT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

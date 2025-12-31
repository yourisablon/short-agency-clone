const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">NOA</h3>
              <p className="text-sm text-background/60">
                Vidéo marketing pour PME et marques lifestyle
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 text-sm">
              <a href="mailto:contact@agencenoa.com" className="text-background/70 hover:text-background transition-colors">
                contact@agencenoa.com
              </a>
              <a href="tel:+33695009518" className="text-background/70 hover:text-background transition-colors">
                +33 6 95 00 95 18
              </a>
            </div>
          </div>

          <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
            <p>© 2025 NOA. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="/cgv" className="hover:text-background/80 transition-colors">CGV</a>
              <a href="/mentions-legales" className="hover:text-background/80 transition-colors">Mentions légales</a>
              <a href="/politique-confidentialite" className="hover:text-background/80 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

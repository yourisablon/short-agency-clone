import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p>AGENCE NOA</p>
            <p>Email : contact@agencenoa.com</p>
            <p>Téléphone : +33 6 95 00 95 18</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Directeur de la publication</h2>
            <p>AGENCE NOA</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p>Ce site est hébergé par Lovable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d'auteur.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;

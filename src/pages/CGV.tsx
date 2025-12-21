import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Article 1 - Objet</h2>
            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre AGENCE NOA et ses clients.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article 2 - Prix</h2>
            <p>Les prix sont indiqués en euros et hors taxes. Ils sont susceptibles d'être modifiés à tout moment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article 3 - Paiement</h2>
            <p>Le paiement s'effectue selon les modalités convenues entre les parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article 4 - Livraison</h2>
            <p>Les délais de livraison sont donnés à titre indicatif.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Article 5 - Propriété intellectuelle</h2>
            <p>Tous les contenus créés restent la propriété d'AGENCE NOA jusqu'au paiement intégral.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;

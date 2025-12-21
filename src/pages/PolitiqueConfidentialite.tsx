import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Collecte des données</h2>
            <p>Nous collectons les données personnelles que vous nous fournissez volontairement via notre formulaire de contact : nom, prénom, email, téléphone et description de projet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
            <p>Vos données sont utilisées uniquement pour répondre à vos demandes et vous contacter concernant nos services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Conservation des données</h2>
            <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@agencenoa.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p>Ce site n'utilise pas de cookies de tracking.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;

import { Check } from "lucide-react";

const Portfolio = () => {
  return (
    <>
      {/* SECTION POUR QUI */}
      <section id="pour-qui" className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Pour qui
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12">
              Cette offre est faite pour :
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {["Restaurants", "Bars", "Instituts / spas", "Salles de sport", "Avocats"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
                  <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground">Pas pour ceux qui veulent juste poster sur Instagram.</p>
          </div>
        </div>
      </section>

      {/* SECTION OFFRE */}
      <section id="offre" className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                L'offre
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12">
              Chaque mois, on s'occupe de tout
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground mb-8">
              {[
                "Stratégie mensuelle",
                "4h de tournage optimisé",
                "Création de vidéos courtes",
                "Gestion du compte Instagram",
                "Automatisations",
                "Rapport mensuel clair",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground font-medium">Objectif : générer des réservations chaque semaine.</p>
          </div>
        </div>
      </section>

      {/* SECTION GARANTIE */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-16 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                Zéro risque pour vous
              </h2>
              <p className="text-lg text-muted-foreground mb-2">Si vous n'avez pas plus de demandes en 90 jours,</p>
              <p className="text-xl text-foreground font-bold">nous continuons gratuitement jusqu'à obtenir des résultats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRIX */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              À partir de 750€/mois
            </h2>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p className="text-2xl text-primary font-bold">Offre actuelle : 600€/mois</p>
              <p>Sans engagement</p>
              <p>(Budget publicitaire inclus)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

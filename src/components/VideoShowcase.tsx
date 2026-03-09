import { Eye, MessageSquare, Heart } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section id="methode" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">

        {/* SECTION PROBLÈME */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Le constat
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Aujourd'hui, Instagram ne vous rapporte presque rien.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Vous publiez, mais ça ne génère presque aucune réservation.<br />Peu de visibilité, peu d'engagement, peu de demandes.</p>
            <p className="font-medium text-foreground">Pendant ce temps, vos concurrents remplissent.</p>
          </div>
        </div>

        {/* SECTION PRISE DE CONSCIENCE */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Le problème n'est pas Instagram.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Le vrai problème, c'est l'absence de système pour transformer les vues en clients.</p>
            <p className="font-medium text-foreground">Publier sans stratégie ne remplit pas un établissement.</p>
          </div>
        </div>

        {/* SECTION SYSTÈME */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Notre système
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12">
            Notre système d'acquisition Instagram local
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Attirer</h3>
              <p className="text-muted-foreground">Vidéos courtes + publicités locales ciblées pour capter l'attention de vos futurs clients.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Convertir</h3>
              <p className="text-muted-foreground">DM automatisés + parcours optimisé pour transformer les vues en réservations.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Fidéliser</h3>
              <p className="text-muted-foreground">Contenu régulier + offres stratégiques pour faire revenir les clients.</p>
            </div>
          </div>
        </div>

        {/* SECTION COMMENT ÇA MARCHE */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Concrètement, chaque mois :
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>Stratégie alignée avec vos objectifs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>Tournage optimisé pour capter toute la matière</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>Vidéos publiées régulièrement</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>Automatisations pour générer des demandes</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>Suivi et ajustements mensuels</span>
            </li>
          </ul>
          <p className="text-lg text-foreground font-medium mt-8 text-center">Objectif : générer des demandes chaque semaine.</p>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;

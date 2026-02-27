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
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Aujourd'hui, beaucoup d'entreprises :</p>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>publient du contenu sans savoir s'il attire des clients</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>testent des publicités sans cohérence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>dépendent du bouche-à-oreille</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>n'ont aucune visibilité sur leurs prochaines demandes</span>
              </li>
            </ul>
            <p className="font-medium text-foreground">Résultat : une activité irrégulière et difficile à prévoir.</p>
            <p>Le problème n'est pas votre entreprise.<br />C'est l'absence d'un système clair pour attirer des clients.</p>
          </div>
        </div>

        {/* SECTION RÉVÉLATION */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Ce qui attire des clients, ce n'est pas un outil.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>La plupart des entreprises utilisent :</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 my-8">
              <div className="p-4 rounded-2xl border border-border/50 flex-1" style={{ background: 'var(--gradient-card)' }}>
                <span>la vidéo pour être vues</span>
              </div>
              <div className="p-4 rounded-2xl border border-border/50 flex-1" style={{ background: 'var(--gradient-card)' }}>
                <span>la publicité pour tester</span>
              </div>
              <div className="p-4 rounded-2xl border border-border/50 flex-1" style={{ background: 'var(--gradient-card)' }}>
                <span>Instagram pour publier</span>
              </div>
            </div>
            <p className="font-medium text-foreground">Mais séparément.</p>
            <p>C'est un système cohérent.</p>
            <p>Quand contenu, publicité et automatisation fonctionnent ensemble,<br />l'acquisition devient plus stable.</p>
          </div>
        </div>

        {/* SECTION SOLUTION */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Notre solution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Un système complet pour attirer des clients.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Nous mettons en place un système complet qui combine :</p>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des vidéos pensées pour attirer les bons clients</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des campagnes publicitaires ciblées</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des automatisations pour capter et qualifier les demandes</span>
            </li>
          </ul>
          <p className="text-lg text-foreground font-medium mt-8">Objectif : transformer votre visibilité en clients concrets.</p>
        </div>

        {/* SECTION BÉNÉFICES */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Ce que vous obtenez
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">une stratégie adaptée à votre activité</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">des vidéos conçues pour attirer des clients</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">des campagnes publicitaires optimisées</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">un système qui capte et filtre les demandes</span>
            </div>
            <div className="flex items-center gap-4 p-4 md:col-span-2">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">une visibilité plus cohérente et rassurante</span>
            </div>
          </div>
          <div className="mt-8 text-lg text-muted-foreground space-y-2">
            <p>Nous ne produisons pas du contenu pour remplir vos réseaux.</p>
            <p className="text-foreground font-medium">Nous mettons en place un système pour attirer des clients.</p>
          </div>
        </div>

        {/* SECTION PROCESS */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Comment ça se passe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">1.</div>
              <p className="text-muted-foreground">Analyse de votre situation actuelle</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">2.</div>
              <p className="text-muted-foreground">Construction du système vidéo et publicité</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">3.</div>
              <p className="text-muted-foreground">Mise en place des automatisations</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">4.</div>
              <p className="text-muted-foreground">Suivi et optimisation</p>
            </div>
          </div>
          <p className="text-lg text-foreground font-medium mt-8 text-center">Vous savez exactement ce qui attire vos clients.</p>
        </div>

        {/* SECTION RÉSULTAT */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            L'objectif est simple
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            que vous n'ayez plus à vous demander d'où viendront vos prochains clients.
          </p>
        </div>

        {/* SECTION ALTERNATIVE */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
            <p className="text-lg text-muted-foreground mb-4">Vous pouvez continuer à tester des actions isolées.</p>
            <p className="text-xl text-foreground font-bold">Ou mettre en place un système clair qui travaille pour votre entreprise.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;

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
                <span>publient du contenu sans savoir s'il attire des <span className="text-primary">clients</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>testent des <span className="text-primary">publicités</span> sans cohérence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>dépendent du bouche-à-oreille</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <span>n'ont aucune visibilité sur leurs prochaines <span className="text-primary">demandes</span></span>
              </li>
            </ul>
            <p className="font-medium text-foreground">Résultat : une <span className="text-primary">activité</span> irrégulière et difficile à prévoir.</p>
            <p>Le problème n'est pas votre entreprise.<br />C'est l'absence d'un <span className="text-primary">système</span> clair pour attirer des clients.</p>
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
                <span>la <span className="text-primary">vidéo</span> pour être vues</span>
              </div>
              <div className="p-4 rounded-2xl border border-border/50 flex-1" style={{ background: 'var(--gradient-card)' }}>
                <span>la <span className="text-primary">publicité</span> pour tester</span>
              </div>
              <div className="p-4 rounded-2xl border border-border/50 flex-1" style={{ background: 'var(--gradient-card)' }}>
                <span>Instagram pour publier</span>
              </div>
            </div>
            <p className="font-medium text-foreground">Mais séparément.</p>
            <p>C'est un <span className="text-primary">système</span> cohérent.</p>
            <p>Quand contenu, publicité et <span className="text-primary">automatisation</span> fonctionnent ensemble,<br />l'<span className="text-primary">acquisition</span> devient plus <span className="text-primary">stable</span>.</p>
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
            Un <span className="text-primary">système</span> complet pour attirer des <span className="text-primary">clients</span>.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Nous mettons en place un système complet qui combine :</p>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des <span className="text-primary">vidéos</span> pensées pour attirer les bons clients</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des campagnes <span className="text-primary">publicitaires</span> ciblées</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
              <span>des <span className="text-primary">automatisations</span> pour capter et qualifier les <span className="text-primary">demandes</span></span>
            </li>
          </ul>
          <p className="text-lg text-foreground font-medium mt-8">Objectif : transformer votre visibilité en clients <span className="text-primary">concrets</span>.</p>
        </div>

        {/* SECTION BÉNÉFICES */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Ce que vous obtenez
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">une stratégie adaptée à votre <span className="text-primary">activité</span></span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">des <span className="text-primary">vidéos</span> conçues pour attirer des <span className="text-primary">clients</span></span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">des campagnes publicitaires optimisées</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">un <span className="text-primary">système</span> qui capte et filtre les <span className="text-primary">demandes</span></span>
            </div>
            <div className="flex items-center gap-4 p-4 md:col-span-2">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">une visibilité plus cohérente et rassurante</span>
            </div>
          </div>
          <div className="mt-8 text-lg text-muted-foreground space-y-2">
            <p>Nous ne produisons pas du contenu pour remplir vos réseaux.</p>
            <p className="text-foreground font-medium">Nous mettons en place un système pour attirer des <span className="text-primary">clients</span>.</p>
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
              <p className="text-muted-foreground"><span className="text-primary">Analyse</span> de votre situation actuelle</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">2.</div>
              <p className="text-muted-foreground">Construction du <span className="text-primary">système</span> vidéo et publicité</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">3.</div>
              <p className="text-muted-foreground">Mise en place des <span className="text-primary">automatisations</span></p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">4.</div>
              <p className="text-muted-foreground">Suivi et optimisation</p>
            </div>
          </div>
          <p className="text-lg text-foreground font-medium mt-8 text-center">Vous savez exactement ce qui attire vos <span className="text-primary">clients</span>.</p>
        </div>

        {/* SECTION RÉSULTAT */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            L'objectif est simple
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            que vous n'ayez plus à vous demander d'où viendront vos prochains <span className="text-primary">clients</span>.
          </p>
        </div>

        {/* SECTION ALTERNATIVE */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
            <p className="text-lg text-muted-foreground mb-4">Vous pouvez continuer à tester des actions isolées.</p>
            <p className="text-xl text-foreground font-bold">Ou mettre en place un <span className="text-primary">système</span> clair qui travaille pour votre entreprise.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;

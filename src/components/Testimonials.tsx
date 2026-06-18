const Testimonials = () => {
  return (
    <section id="avis" className="relative py-32 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Preuve
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Preuve, résultats concrets
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className="group relative p-8 md:p-12 rounded-3xl border-2 border-border/50 hover:border-primary/30 transition-all duration-500"
            style={{ background: 'var(--gradient-card)' }}
          >
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
              style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.3)' }}
            />

            <h3 className="text-2xl font-bold text-foreground mb-6">Cabinet d'avocate, reprise d'activité</h3>

            <div className="space-y-3 text-lg text-muted-foreground mb-6">
              <p><span className="text-foreground font-medium">Avant :</span> agenda vide, dépendance au bouche à oreille.</p>
              <p><span className="text-foreground font-medium">30 jours :</span> <span className="text-primary font-bold">4 demandes de rendez-vous par jour, 7 000 € de chiffre d'affaires.</span></p>
              <p><span className="text-foreground font-medium">2 mois :</span> <span className="text-primary font-bold">14 000 € de chiffre d'affaires cumulé, agenda rempli.</span></p>
            </div>

            <p className="text-muted-foreground">
              Sans prospection. Juste son métier, pendant que le système amenait les clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

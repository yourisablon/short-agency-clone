const Problem = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Faire des vidéos ne suffit pas.
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Beaucoup d'entreprises publient des vidéos sans réelle réflexion.
            </p>
            <p>
              Résultat : peu d'impact, peu de retours, et beaucoup de temps perdu.
            </p>
            <p className="text-foreground font-medium">
              Le problème n'est pas la vidéo.
            </p>
            <p className="text-foreground font-medium">
              Le problème, c'est l'absence de structure et de message clair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

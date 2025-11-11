const Portfolio = () => {
  const projects = [
    { id: 1, title: "Reels Instagram", category: "Social Media" },
    { id: 2, title: "Contenus viraux", category: "Social Media" },
    { id: 3, title: "VSL", category: "Publicité" },
    { id: 4, title: "TikTok Ads", category: "Publicité" },
    { id: 5, title: "YouTube Shorts", category: "Publicité" },
    { id: 6, title: "Vidéos de lancement", category: "Marque & Produit" },
    { id: 7, title: "Storytelling", category: "Marque & Produit" },
    { id: 8, title: "Campagnes visuelles", category: "Marque & Produit" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-primary">Nos créations</span>{" "}
            <span className="text-foreground">qui font la différence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les vidéos qui ont propulsé nos clients vers le succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-[9/16] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs font-semibold text-primary-foreground/80 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

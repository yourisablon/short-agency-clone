const Portfolio = () => {
  const projects = [
    { id: 1, title: "Reels Instagram", category: "Social Media", featured: true },
    { id: 2, title: "Contenus viraux", category: "Social Media", featured: false },
    { id: 3, title: "VSL", category: "Publicité", featured: true },
    { id: 4, title: "TikTok Ads", category: "Publicité", featured: false },
    { id: 5, title: "YouTube Shorts", category: "Publicité", featured: false },
    { id: 6, title: "Vidéos de lancement", category: "Marque & Produit", featured: true },
    { id: 7, title: "Storytelling", category: "Marque & Produit", featured: false },
    { id: 8, title: "Campagnes visuelles", category: "Marque & Produit", featured: false },
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with modern styling */}
        <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto">
          <div className="inline-block animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Portfolio</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">Nos créations</span>
            <br />
            <span className="text-foreground">qui font la différence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Découvrez les vidéos qui ont propulsé nos clients vers le succès.
          </p>
        </div>

        {/* Asymmetric grid layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {projects.map((project, index) => {
              // Asymmetric layout: featured items are larger
              const gridClass = project.featured 
                ? "md:col-span-6 md:row-span-2 aspect-[4/5]" 
                : "md:col-span-6 aspect-[16/9]";
              
              return (
                <div
                  key={project.id}
                  className={`group relative ${gridClass} animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glass card with modern effects */}
                  <div className="relative h-full rounded-3xl overflow-hidden cursor-pointer">
                    {/* Background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/5 to-accent/20" />
                    
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                      backgroundSize: "30px 30px"
                    }} />
                    
                    {/* Glass border effect */}
                    <div className="absolute inset-0 border border-border/50 rounded-3xl backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-border/50 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-black text-foreground drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          <span>Voir le projet</span>
                          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover scale effect on background */}
                    <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

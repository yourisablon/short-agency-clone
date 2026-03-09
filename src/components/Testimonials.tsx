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
            Résultats concrets
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

            <h3 className="text-2xl font-bold text-foreground mb-6">Cecile Prost Avocats</h3>
            
            <div className="space-y-3 text-lg text-muted-foreground mb-6">
              <p><span className="text-foreground font-medium">Avant :</span> Appels irréguliers</p>
              <p><span className="text-foreground font-medium">Après :</span> <span className="text-primary font-bold">+50 demandes en 30 jours</span></p>
            </div>

            <p className="text-muted-foreground">
              👉 Grâce au système : contenu + ads + automatisation.
            </p>
          </div>
        </div>

        {/* Logo Banner */}
        <div className="mt-24">
          <div className="inline-block mb-6">
            <span className="text-green-600 font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20">
              Ils nous font confiance
            </span>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite">
              <div className="flex gap-16 items-center px-8">
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png" alt="Olympique de Marseille" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://assets.renderman.pixar.com/MPC/MPC-Logo.png" alt="MPC" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://workable-application-form.s3.us-east-1.amazonaws.com/advanced/production/667018513e6590e6b6d8cb1f/d17fe696-7624-9b3f-ab4a-0ae70893f65c" alt="One of US" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://1000logos.net/wp-content/uploads/2021/05/Illumination-logo.png" alt="Illumination Mac Guff" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://www.ecv.fr/app/uploads/2024/10/AssetsPageSite_logo-1108x1108.jpg" alt="ECV" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
              <div className="flex gap-16 items-center px-8">
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png" alt="Olympique de Marseille" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://assets.renderman.pixar.com/MPC/MPC-Logo.png" alt="MPC" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://workable-application-form.s3.us-east-1.amazonaws.com/advanced/production/667018513e6590e6b6d8cb1f/d17fe696-7624-9b3f-ab4a-0ae70893f65c" alt="One of US" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://1000logos.net/wp-content/uploads/2021/05/Illumination-logo.png" alt="Illumination Mac Guff" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img src="https://www.ecv.fr/app/uploads/2024/10/AssetsPageSite_logo-1108x1108.jpg" alt="ECV" className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section id="methode" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video player mockup */}
          <div className="relative group">
            <div 
              className="relative aspect-video rounded-3xl overflow-hidden border-4 border-border/50 shadow-2xl"
              style={{ background: 'var(--gradient-card)' }}
            >
              {/* Video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group-hover:shadow-primary/50">
                  <Play className="w-10 h-10 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content - Présentation / Promesse */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Notre approche
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Faire des vidéos ne suffit pas.
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Beaucoup d'entreprises publient des vidéos sans réelle réflexion. Résultat : peu d'impact, peu de retours et beaucoup de temps perdu.
              </p>
              <p>
                Le problème n'est pas la vidéo. Le problème, c'est l'absence de structure et de message clair.
              </p>
            </div>
          </div>
        </div>

        {/* Positionnement / Différenciation */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Une approche simple et réfléchie.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Chez Agence NOA, chaque vidéo est pensée en fonction de votre activité. Nous cherchons d'abord à comprendre votre objectif, puis à construire des vidéos claires, cohérentes et faciles à utiliser.
            </p>
            <p>
              Pas d'effets inutiles. Pas de vidéos faites au hasard. Juste de la clarté.
            </p>
          </div>
        </div>

        {/* Méthode */}
        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Comment nous travaillons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">1.</div>
              <p className="text-muted-foreground">Analyse de votre activité et de vos besoins</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">2.</div>
              <p className="text-muted-foreground">Définition du message et de la structure</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">3.</div>
              <p className="text-muted-foreground">Création et montage des vidéos</p>
            </div>
            <div className="p-6 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="text-4xl font-bold text-primary mb-4">4.</div>
              <p className="text-muted-foreground">Conseils pour utiliser vos contenus efficacement</p>
            </div>
          </div>
        </div>

        {/* Bénéfices */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 text-center">
            Ce que cela vous apporte
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">Une communication plus claire</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">Une image plus professionnelle</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">Des vidéos utiles et cohérentes</span>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">Une vision sur le long terme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
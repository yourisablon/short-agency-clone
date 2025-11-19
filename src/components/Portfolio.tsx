import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Campagne Instagram",
    category: "Publicité vidéo",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Réseaux sociaux",
    category: "Contenu créatif",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Brand Story",
    category: "Marketing vidéo",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Lancement produit",
    category: "Vidéo publicitaire",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Nos réalisations",
    category: "Toutes nos vidéos",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop",
    isGalleryLink: true,
  },
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: number; title: string; url: string } | null>(null);
  
  const handleProjectClick = (projectId: number) => {
    if (projectId === 4) { // Lancement produit
      setSelectedVideo({ 
        id: 4, 
        title: "Lancement produit", 
        url: "https://www.youtube.com/embed/8CuxJDAiRes?autoplay=1" 
      });
    } else if (projectId === 2) { // Réseaux sociaux
      setSelectedVideo({ 
        id: 2, 
        title: "Réseaux sociaux", 
        url: "https://www.youtube.com/embed/ytjbLfDHxpY?autoplay=1" 
      });
    } else if (projectId === 1) { // Campagne Instagram
      setSelectedVideo({ 
        id: 1, 
        title: "Campagne Instagram", 
        url: "https://www.youtube.com/embed/sfmiVDjuNY4?autoplay=1" 
      });
    } else if (projectId === 3) { // Brand Story
      setSelectedVideo({ 
        id: 3, 
        title: "Brand Story", 
        url: "https://www.youtube.com/embed/Q86nlh6M5WM?autoplay=1" 
      });
    }
  };

  return (
    <>
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo?.url}
              title={selectedVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
      
      <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            NOS CRÉATIONS
            <span className="block text-primary mt-2">QUI PERFORMENT</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Découvrez nos projets vidéo qui ont généré des millions de vues et des milliers de conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            project.isGalleryLink ? (
              <Link
                key={project.id}
                to="/gallery"
                className={`group relative overflow-hidden rounded-3xl border-2 border-border/50 transition-all duration-500 hover:border-primary/50 cursor-pointer ${
                  project.featured ? "md:col-span-2 md:aspect-[21/9]" : "aspect-square"
                }`}
                style={{ 
                  background: 'var(--gradient-card)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-accent font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-4">
                      {project.category}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Découvrir toutes nos vidéos</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 80px hsl(var(--primary) / 0.3)' }}
                />
              </Link>
            ) : (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className={`group relative overflow-hidden rounded-3xl border-2 border-border/50 transition-all duration-500 hover:border-primary/50 cursor-pointer ${
                  project.featured ? "md:col-span-2 md:aspect-[21/9]" : "aspect-square"
                }`}
                style={{ 
                  background: 'var(--gradient-card)',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-accent font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-4">
                      {project.category}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Voir le projet</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 80px hsl(var(--primary) / 0.3)' }}
                />
              </div>
            )
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Portfolio;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const videos = [
  {
    id: 1,
    title: "Lancement produit",
    url: "https://www.youtube.com/embed/8CuxJDAiRes?autoplay=1",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    category: "Produit"
  },
  {
    id: 2,
    title: "Réseaux sociaux",
    url: "https://www.youtube.com/embed/ytjbLfDHxpY?autoplay=1",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop",
    category: "Social Media"
  },
  {
    id: 3,
    title: "Campagne Instagram",
    url: "https://www.youtube.com/embed/sfmiVDjuNY4?autoplay=1",
    thumbnail: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&auto=format&fit=crop",
    category: "Publicité"
  },
  {
    id: 4,
    title: "Brand Story",
    url: "https://www.youtube.com/embed/Q86nlh6M5WM?autoplay=1",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop",
    category: "Branding"
  },
];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: number; title: string; url: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-block mb-6">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Galerie
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              NOS RÉALISATIONS
              <span className="block text-primary mt-2">EN VIDÉO</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Découvrez toutes nos créations vidéo qui ont fait la différence pour nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo({ id: video.id, title: video.title, url: video.url })}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;

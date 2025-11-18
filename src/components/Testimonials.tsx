import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tomy",
    role: "Glamrock PUB",
    content: "Super vidéo encore merci pour votre réactivité, j'ai de nouveaux clients !",
    rating: 5,
  },
  {
    id: 2,
    name: "Muriel Prost",
    role: "Créatrice de contenu",
    content: "waouh j'adore le rendu de la vidéo, mes créations sont vraiment mises en valeur je ne m'attendais pas a autant de vidéos ! je vais tester tout ca sur instagram",
    rating: 5,
  },
  {
    id: 3,
    name: "L'adjoint",
    role: "Skenawin Studios",
    content: "Magnifique la qualité est top !",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="avis" className="relative py-32 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Témoignages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            ILS NOUS FONT
            <span className="block text-primary mt-2">CONFIANCE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative p-8 rounded-3xl border-2 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105"
              style={{ 
                background: 'var(--gradient-card)',
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.3)' }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg text-foreground/90 mb-8 font-medium leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Banner */}
        <div className="mt-24 overflow-hidden">
          <div className="inline-block mb-6">
            <span className="text-green-600 font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20">
              Ils nous font confiance
            </span>
          </div>
          <div className="relative">
            <div className="flex animate-scroll-infinite">
              {/* First set of logos */}
              <div className="flex gap-16 items-center px-8">
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png" 
                    alt="Olympique de Marseille"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://www.mpc-rh.com/wp-content/uploads/2023/03/cropped-mpc-new-logo.png" 
                    alt="MPC"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://www.oneofus.dk/wp-content/uploads/2022/08/One-of-Us_Logo_Black.png" 
                    alt="One of US"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://macguff.fr/wp-content/uploads/2021/02/MACGUFF_COULEUR_CMJN.jpg" 
                    alt="Illumination Mac Guff"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              {/* Duplicate set for infinite scroll */}
              <div className="flex gap-16 items-center px-8">
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png" 
                    alt="Olympique de Marseille"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://www.mpc-rh.com/wp-content/uploads/2023/03/cropped-mpc-new-logo.png" 
                    alt="MPC"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://www.oneofus.dk/wp-content/uploads/2022/08/One-of-Us_Logo_Black.png" 
                    alt="One of US"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-shrink-0 h-20 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <img 
                    src="https://macguff.fr/wp-content/uploads/2021/02/MACGUFF_COULEUR_CMJN.jpg" 
                    alt="Illumination Mac Guff"
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
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

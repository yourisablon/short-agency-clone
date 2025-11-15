import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Thomas",
    role: "Entrepreneur",
    content: "Résultats exceptionnels ! Mes vidéos génèrent 3x plus d'engagement depuis que je travaille avec NOA.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie Lambert",
    role: "Créatrice de contenu",
    content: "Équipe réactive et professionnelle. La qualité des vidéos dépasse mes attentes à chaque fois.",
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
      </div>
    </section>
  );
};

export default Testimonials;

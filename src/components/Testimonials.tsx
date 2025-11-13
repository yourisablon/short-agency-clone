import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Tomy",
      role: "Glamrock PUB",
      content: "Super vidéo, encore merci pour votre réactivité ! Grâce à vous j'ai trouvé de nouveaux clients.",
      rating: 5,
    },
    {
      id: 2,
      name: "Muriel Prost",
      role: "",
      content: "Waouh, j'adore le rendu ! Mes créations sont sublimées, et j'ai reçu plusieurs vidéos prêtes à poster sur Instagram.",
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

  return (
    <section id="avis" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto">
          <div className="inline-block animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Témoignages</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Ils nous ont fait confiance.</span>
            <br />
            <span className="text-primary">Et ils ne le regrettent pas.</span>
          </h2>
        </div>

        {/* Testimonials grid with modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card content */}
              <div className="relative h-full bg-gradient-to-br from-card via-background to-card border border-border/50 rounded-3xl p-8 space-y-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary drop-shadow-lg"
                    />
                  ))}
                </div>

                {/* Quote with better styling */}
                <div className="relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground leading-relaxed pl-6 pt-4">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author info with modern design */}
                <div className="pt-6 border-t border-border/50 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    )}
                  </div>
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

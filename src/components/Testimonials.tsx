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
    <section id="avis" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-foreground">Ils nous ont fait confiance.</span>{" "}
            <span className="text-primary">Et ils ne le regrettent pas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
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

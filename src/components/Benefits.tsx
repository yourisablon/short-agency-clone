import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Une communication plus claire",
    "Une image plus professionnelle",
    "Des vidéos utiles et cohérentes",
    "Une vision sur le long terme",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Ce que cela vous apporte
          </h2>
          
          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

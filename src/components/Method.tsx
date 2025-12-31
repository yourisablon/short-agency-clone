const Method = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse de votre activité et de vos besoins",
    },
    {
      number: "02", 
      title: "Définition du message et de la structure",
    },
    {
      number: "03",
      title: "Création et montage des vidéos",
    },
    {
      number: "04",
      title: "Conseils pour une utilisation efficace de vos contenus",
    },
  ];

  return (
    <section id="methode" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Comment nous travaillons
          </h2>
          
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <span className="text-accent font-semibold text-lg min-w-[2.5rem]">
                  {step.number}
                </span>
                <p className="text-foreground leading-relaxed">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;

import { Check, X } from "lucide-react";

const Portfolio = () => {
  const forYou = [
    "Tu es avocat libéral, en solo ou petite structure.",
    "Tu dépends encore du bouche à oreille pour trouver tes clients.",
    "Tu n'as ni le temps ni l'envie de te transformer en commercial.",
    "Tu veux un flux de demandes plus prévisible sans changer ta façon de travailler.",
  ];

  const notForYou = [
    "Tu as déjà un flux régulier de clients entrants.",
    "Tu cherches à tout gérer toi même.",
    "Tu n'es pas prêt à investir dans ta visibilité.",
  ];

  return (
    <section id="pour-qui" className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-12">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Pour qui c'est fait
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border-2 border-primary/30" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-primary mb-6 font-bold">C'est pour toi si</p>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6 font-bold">Ce n'est pas pour toi si</p>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

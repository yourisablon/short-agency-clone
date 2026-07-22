import { Search, Settings, BarChart3, MapPin } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section id="methode" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">

        {/* SECTION LE CONSTAT */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Le constat
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Tu ne sais jamais vraiment d'où viendra le prochain <span className="text-primary">client</span>.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Tu comptes sur les recommandations, sur le bouche à oreille, sur le réseau. Parfois ça marche. Parfois non.</p>
            <p className="font-medium text-foreground">Et cette imprévisibilité, ce n'est pas juste un problème financier. C'est une charge mentale permanente.</p>
            <p className="font-medium text-foreground">Ce n'est pas un problème de compétence. C'est un problème de visibilité.</p>
          </div>
        </div>

        {/* SECTION GOOGLE */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Quand quelqu'un a besoin d'un avocat, il ne demande plus autour de lui.
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-bold mb-8">Il tape sur Google.</p>
          <div className="space-y-3 text-lg text-muted-foreground mb-8">
            <p>« Avocat droit de la famille Marseille. »</p>
            <p>« Avocat divorce Lyon. »</p>
            <p>« Avocat garde d'enfants Paris. »</p>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Si ton cabinet n'apparaît pas dans ces résultats, ce client appelle quelqu'un d'autre.</p>
            <p className="font-medium text-foreground">Pas parce que tu es moins bon.</p>
            <p className="font-medium text-foreground">Parce qu'il ne sait pas que tu existes.</p>
          </div>
        </div>

        {/* SECTION LE CAS QUI RÉSUME TOUT */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Le cas qui résume tout
            </span>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>Une avocate m'a contacté au moment où elle reprenait son activité.</p>
            <p>Elle connaissait le droit. Elle avait l'expérience. Mais elle n'avait aucun système pour attirer des clients. Juste l'espoir que le bouche à oreille fasse son travail.</p>
            <p className="text-foreground font-medium">Son problème n'était pas de plaider. C'était que le téléphone ne sonnait pas assez pour remplir son agenda.</p>
            <p>J'ai installé mon système d'acquisition sur son cabinet.</p>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border/50 aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/aC3WsmqwpOU"
              title="Témoignage d'une avocate - Développe ton Cab"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">30 jours plus tard</p>
              <p className="text-2xl text-foreground font-bold mb-2">4 demandes de rendez-vous par jour en moyenne</p>
              <p className="text-xl text-primary font-bold">7 000 € de chiffre d'affaires généré</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">2 mois plus tard</p>
              <p className="text-2xl text-foreground font-bold mb-2">Un agenda rempli</p>
              <p className="text-xl text-primary font-bold">14 000 € de chiffre d'affaires cumulé</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground mt-8">
            <p>Elle n'a pas prospecté. Elle n'a pas passé ses soirées sur les réseaux. Elle a fait son métier, pendant que le système amenait les clients.</p>
          </div>
        </div>

        {/* SECTION CE QUE JE FAIS POUR TOI */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="inline-block mb-6">
            <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Ce que je fais pour toi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Je m'occupe de tout pour que ton cabinet apparaisse sur <span className="text-primary">Google</span>.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p>Quand un client cherche un avocat dans ta ville, c'est toi qu'il trouve.</p>
            <p>Tu n'as rien à gérer. Ni les publicités, ni la technique, ni le suivi.</p>
            <p className="text-foreground font-medium">Tu reçois les demandes de rendez-vous.</p>
            <p className="text-foreground font-medium">Tu fais ton métier.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Audit</h3>
              <p className="text-muted-foreground">Audit de ton positionnement local et de ta spécialité.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Google Ads locale</h3>
              <p className="text-muted-foreground">Création et gestion de ta campagne Google Ads locale.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Google Business</h3>
              <p className="text-muted-foreground">Optimisation complète de ta fiche Google Business.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Suivi & rapport</h3>
              <p className="text-muted-foreground">Suivi des résultats et rapport à J+30.</p>
            </div>
          </div>
        </div>

        {/* SECTION AVANT / APRÈS */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12 text-center">
            Avant / Après
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-2xl border border-border/50" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Avant</p>
              <ul className="space-y-3 text-lg text-muted-foreground list-disc pl-5">
                <li>Agenda imprévisible.</li>
                <li>Chiffre d'affaires qui fluctue.</li>
                <li>Dépendance totale au bouche à oreille.</li>
                <li>Stress de fin de mois.</li>
                <li>Pas de temps pour prospecter, et pas l'envie non plus.</li>
              </ul>
            </div>
            <div className="p-8 md:p-10 rounded-2xl border-2 border-primary/30" style={{ background: 'var(--gradient-card)' }}>
              <p className="text-sm uppercase tracking-wider text-primary mb-4 font-bold">Après</p>
              <ul className="space-y-3 text-lg text-foreground list-disc pl-5">
                <li>Des demandes de rendez-vous qualifiées chaque semaine.</li>
                <li>Un chiffre d'affaires plus prévisible.</li>
                <li>Un cabinet qui tourne, sans que tu aies à te vendre toi-même.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;

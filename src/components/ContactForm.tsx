import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  nom: z.string().trim().min(1, { message: "Le nom est requis" }).max(100),
  prenom: z.string().trim().min(1, { message: "Le prénom est requis" }).max(100),
  telephone: z.string().trim().min(10, { message: "Numéro de téléphone invalide" }).max(20),
  email: z.string().trim().email({ message: "Email invalide" }).max(255),
  projet: z.string().trim().min(10, { message: "Veuillez décrire votre projet (minimum 10 caractères)" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  showHeader?: boolean;
  sectionId?: string;
}

const ContactForm = ({ showHeader = true, sectionId }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: "contact@agencenoa.com",
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,
          projet: data.projet,
        },
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={sectionId} className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        {showHeader && (
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-accent font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nous contacter
            </h2>
            <p className="text-lg text-muted-foreground">
              Parlez-nous de votre projet, nous vous répondrons rapidement.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" {...register("nom")} placeholder="Votre nom" className={errors.nom ? "border-destructive" : ""} />
              {errors.nom && <p className="text-sm text-destructive">{errors.nom.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input id="prenom" {...register("prenom")} placeholder="Votre prénom" className={errors.prenom ? "border-destructive" : ""} />
              {errors.prenom && <p className="text-sm text-destructive">{errors.prenom.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone">Numéro de téléphone *</Label>
            <Input id="telephone" type="tel" {...register("telephone")} placeholder="+33 6 12 34 56 78" className={errors.telephone ? "border-destructive" : ""} />
            {errors.telephone && <p className="text-sm text-destructive">{errors.telephone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" {...register("email")} placeholder="votre@email.com" className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="projet">Votre projet *</Label>
            <Textarea id="projet" {...register("projet")} placeholder="Décrivez-nous votre projet..." rows={6} className={errors.projet ? "border-destructive" : ""} />
            {errors.projet && <p className="text-sm text-destructive">{errors.projet.message}</p>}
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

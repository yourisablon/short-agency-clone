import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Parlons-en
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Présentez-nous votre activité et vos objectifs. Nous vous dirons simplement si nous pouvons vous aider, et comment.
          </p>

          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
          >
            <a href="https://calendly.com/youri-sablon" target="_blank" rel="noopener noreferrer">
              Prendre contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

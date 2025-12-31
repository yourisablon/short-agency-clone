import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Positioning from "@/components/Positioning";
import Method from "@/components/Method";
import Benefits from "@/components/Benefits";
import Offer from "@/components/Offer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Positioning />
        <Method />
        <Benefits />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

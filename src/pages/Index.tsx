import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <VideoShowcase />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

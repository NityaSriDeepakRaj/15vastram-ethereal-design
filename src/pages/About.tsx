import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="pt-20">
      <div className="py-16 md:py-24 bg-warm-white text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Story</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-foreground">About 15Vastram</h1>
      </div>
      <FounderSection />
      <Footer />
    </main>
  );
};

export default About;

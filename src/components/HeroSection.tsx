import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="15Vastram - Luxury Indian Ethnic Wear"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/10 to-transparent" />

      <div className="relative h-full flex items-end pb-20 md:items-center md:pb-0">
        <div className="container mx-auto px-6">
          <div className="max-w-xl space-y-6 animate-fade-up">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/80">
              New Collection — Spring 2026
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-cream leading-[1.1]">
              Modern Heritage
            </h1>
            <p className="font-body text-sm text-cream/70 leading-relaxed max-w-sm">
              Where timeless Indian craftsmanship meets contemporary silhouettes. Handcrafted with intention.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-cream text-charcoal font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-warm-white transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

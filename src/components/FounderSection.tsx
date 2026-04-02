import founderPortrait from "@/assets/founder-portrait.jpg";
import foundersEdit1 from "@/assets/founders-edit-1.jpg";
import foundersEdit2 from "@/assets/founders-edit-2.jpg";
import foundersEdit3 from "@/assets/founders-edit-3.jpg";

const FounderSection = () => {
  return (
    <>
      {/* About the Founder */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Portrait */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={founderPortrait}
                alt="Surbhi Jain — Founder of 15Vastram"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1080}
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">The Visionary</p>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight">Surbhi Jain</h2>
              </div>

              <div className="w-12 h-px bg-gold" />

              <div className="space-y-5">
                <h3 className="font-heading text-2xl text-foreground italic">Modern Heritage</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Born from a deep reverence for India's textile legacy, 15Vastram is Surbhi Jain's vision of ethnic wear that 
                  honours tradition while embracing the modern woman. Each piece is a conversation between centuries-old craft 
                  techniques and contemporary design sensibilities.
                </p>
                <h3 className="font-heading text-2xl text-foreground italic">Mindful Fashion</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Surbhi believes that true luxury lies in intentionality — in choosing handwoven fabrics over fast production, 
                  in supporting artisan communities, and in creating garments designed to be treasured across generations. 
                  Every 15Vastram creation carries the warmth of human hands and the precision of a designer's eye.
                </p>
              </div>

              <p className="font-heading text-lg text-foreground italic">
                "I wanted to build a bridge between my grandmother's wardrobe and my daughter's."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Edit Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Hand-Picked</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Founder's Edit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[foundersEdit1, foundersEdit2, foundersEdit3].map((img, i) => (
              <div key={i} className="product-card-zoom aspect-square md:aspect-[3/4]">
                <img
                  src={img}
                  alt={`Founder's Edit ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderSection;

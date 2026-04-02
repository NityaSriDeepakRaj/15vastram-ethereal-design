import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import heroMain from "@/assets/hero-main.jpg";
import product2 from "@/assets/product-2.jpg";
import product5 from "@/assets/product-5.jpg";
import Footer from "@/components/Footer";

const images = [
  { src: lookbook1, alt: "Heritage Collection Editorial", span: "md:col-span-2" },
  { src: lookbook2, alt: "Embroidery Detail", span: "" },
  { src: lookbook3, alt: "Ethereal Drape", span: "" },
  { src: heroMain, alt: "Golden Hour", span: "md:col-span-2" },
  { src: product2, alt: "Ivory Gold Anarkali", span: "" },
  { src: product5, alt: "Navy Chanderi Set", span: "" },
];

const Lookbook = () => {
  return (
    <main className="pt-20">
      <div className="py-16 md:py-24 bg-warm-white text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Spring 2026</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-foreground">Lookbook</h1>
        <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
          A visual journey through our latest collection — where every drape, stitch, and silhouette speaks of heritage reimagined.
        </p>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div key={i} className={`product-card-zoom ${img.span} ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Lookbook;

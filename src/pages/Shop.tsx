import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Shop = () => {
  return (
    <main className="pt-20">
      <div className="py-16 md:py-24 bg-warm-white text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Browse</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-foreground">The Shop</h1>
      </div>
      <ProductGrid />
      <Footer />
    </main>
  );
};

export default Shop;

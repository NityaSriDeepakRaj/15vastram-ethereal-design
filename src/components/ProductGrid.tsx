import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const ProductGrid = () => {
  const { addItem } = useCart();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated for You</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">The Collection</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, i) => (
            <div key={product.id} className="group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="product-card-zoom aspect-[3/4] mb-4 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
              </div>
              <div className="space-y-1">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{product.category}</p>
                <h3 className="font-heading text-lg md:text-xl text-foreground">{product.name}</h3>
                <p className="font-body text-sm text-muted-foreground">₹{product.price.toLocaleString()}</p>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors mt-2 inline-block"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

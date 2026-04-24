import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { kurtis } from "@/data/products";

const KurtiSection = () => {
  const { addItem } = useCart();

  return (
    <section id="kurtis" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Signature Category</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Kurtis</h2>
            <p className="font-body text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
              From everyday elegance to festive splendour — our kurtis are crafted for the modern Indian woman.
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-6 md:mt-0 font-body text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors self-start"
          >
            View All Kurtis
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {kurtis.slice(0, 6).map((product, i) => (
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

export default KurtiSection;

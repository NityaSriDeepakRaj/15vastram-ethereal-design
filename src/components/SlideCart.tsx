import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const SlideCart = () => {
  const { items, cartOpen, setCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setCartOpen(false)} />

      {/* Cart panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-heading text-2xl font-medium text-foreground">Your Bag</h2>
          <button onClick={() => setCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-body text-sm text-muted-foreground">Your bag is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg text-foreground">{item.name}</h3>
                      <p className="font-body text-sm text-muted-foreground">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground">
                        <Minus size={14} />
                      </button>
                      <span className="font-body text-sm text-foreground">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-xs text-muted-foreground hover:text-foreground font-body tracking-wider uppercase">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">Total</span>
                <span className="font-heading text-xl text-foreground">₹{totalPrice.toLocaleString()}</span>
              </div>
              <button className="w-full bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase py-4 hover:bg-charcoal-light transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SlideCart;

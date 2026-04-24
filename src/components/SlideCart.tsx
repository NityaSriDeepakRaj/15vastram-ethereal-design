import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SlideCart = () => {
  const { items, cartOpen, setCartOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const taxRate = 0.12; // 12% GST simulation
  const taxes = totalPrice * taxRate;
  const shipping = totalPrice > 0 ? (totalPrice > 5000 ? 0 : 250) : 0;
  const finalTotal = totalPrice + taxes + shipping;

  const handleCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60]"
          />

          {/* Cart panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-heading text-2xl font-medium text-foreground uppercase tracking-tight">Your Bag</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-60">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-body text-sm uppercase tracking-widest">Your bag is empty</p>
                  <button 
                    onClick={() => {
                      setCartOpen(false);
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById("kurtis")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-xs border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                  >
                    Start Shopping (Kurtis)
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <motion.div 
                      layout
                      key={item.id} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-32 overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-heading text-lg leading-tight text-foreground">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">₹{item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border px-2 py-1 gap-4">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-body text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="font-body text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border px-8 py-8 space-y-4 bg-muted/30">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-muted-foreground uppercase tracking-wider text-[10px]">Subtotal</span>
                    <span className="font-body">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-muted-foreground uppercase tracking-wider text-[10px]">Estimated Tax (12%)</span>
                    <span className="font-body">₹{taxes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-body text-muted-foreground uppercase tracking-wider text-[10px]">Shipping</span>
                    <span className="font-body uppercase text-[10px] tracking-widest">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border flex justify-between items-end">
                  <span className="font-body text-xs uppercase tracking-[0.2em] font-bold">Total</span>
                  <span className="font-heading text-2xl font-light">₹{finalTotal.toLocaleString()}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] font-medium uppercase py-5 hover:bg-primary/90 transition-colors shadow-lg"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideCart;

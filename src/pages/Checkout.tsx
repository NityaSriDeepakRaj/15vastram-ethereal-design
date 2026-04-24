import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, ArrowLeft, Printer, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderId] = useState(() => `VST-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}`);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentSim, setShowPaymentSim] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const taxRate = 0.12;
  const taxes = totalPrice * taxRate;
  const shipping = totalPrice > 5000 ? 0 : 250;
  const finalTotal = totalPrice + taxes + shipping;

  useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      navigate("/shop");
    }
  }, [items, orderPlaced, navigate]);

  const handlePlaceOrder = () => {
    setShowPaymentSim(true);
  };

  const handleDownloadBill = () => {
    const billContent = `
========================================
           15VASTRAM INVOICE
========================================
Order ID: ${orderId}
Date: ${new Date().toLocaleDateString()}
----------------------------------------
Items:
${items.map(i => `${i.name} (x${i.quantity}) - ₹${(i.price * i.quantity).toLocaleString()}`).join("\n")}
----------------------------------------
Subtotal: ₹${totalPrice.toLocaleString()}
GST (12%): ₹${taxes.toLocaleString()}
Shipping: ${shipping === 0 ? "FREE" : `₹${shipping}`}
----------------------------------------
TOTAL AMOUNT: ₹${finalTotal.toLocaleString()}
========================================
Authentic • Sustainable • Heritage
========================================
    `;
    
    const element = document.createElement("a");
    const file = new Blob([billContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `15Vastram_Invoice_${orderId}.txt`;
    document.body.appendChild(element);
    element.click();
    toast.success("Invoice downloaded successfully");
  };

  const confirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentSim(false);
      setOrderPlaced(true);
      clearCart();
      toast.success("Order placed successfully!");
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-background flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border border-border p-12 text-center space-y-6 shadow-sm"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-primary" size={40} />
          </div>
          <h1 className="font-heading text-3xl font-light">Thank You</h1>
          <p className="font-body text-muted-foreground">Your order {orderId} has been placed and is being processed.</p>
          <div className="pt-6 border-t border-border">
            <button 
              onClick={() => navigate("/")}
              className="w-full bg-primary text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-primary/90 transition-colors"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#fbfbfb]">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-body text-xs uppercase tracking-widest">Back to Shop</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Billing Info Form (Simulation) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-heading text-3xl font-light mb-8">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors font-body" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors font-body" placeholder="Last Name" />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Address</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors font-body" placeholder="Street Address" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">City</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors font-body" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Postcode</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors font-body" placeholder="Postcode" />
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-border rounded-sm space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck size={20} />
                <span className="font-body text-xs uppercase tracking-widest font-semibold">Secure Checkout</span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Your payment information is encrypted and processed through our secure simulation gateway. 
                15Vastram does not store your credit card details.
              </p>
            </div>
          </motion.div>

          {/* Luxury Receipt / Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white shadow-xl p-10 md:p-12 border border-border relative overflow-hidden">
              {/* Receipt Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="font-heading text-2xl tracking-tighter mb-1">15VASTRAM</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Luxury Handloom</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Order Number</p>
                  <p className="font-body text-sm font-medium">{orderId}</p>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-4 border-b border-dashed border-border last:border-0">
                    <div className="flex gap-4 items-center">
                      <span className="text-[10px] font-body text-muted-foreground">x{item.quantity}</span>
                      <span className="font-body text-sm">{item.name}</span>
                    </div>
                    <span className="font-body text-sm">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-8 border-t border-border">
                <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                  <span>GST (12%)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-6">
                  <span className="font-heading text-xl uppercase tracking-tighter">Total Amount</span>
                  <span className="font-heading text-2xl">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button 
                  onClick={handlePlaceOrder}
                  className="flex-1 bg-primary text-white py-5 uppercase tracking-[0.3em] text-xs font-semibold hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                >
                  Place Order
                </button>
                <button 
                  onClick={handleDownloadBill}
                  className="p-5 border border-border hover:bg-muted transition-colors text-muted-foreground"
                  title="Download Bill"
                >
                  <Printer size={18} />
                </button>
              </div>

              <p className="text-[9px] text-center mt-12 text-muted-foreground uppercase tracking-[0.4em]">
                Authentic • Sustainable • Heritage
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Payment Gateway Simulation Modal */}
      <AnimatePresence>
        {showPaymentSim && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isProcessing && setShowPaymentSim(false)}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white p-10 md:p-14 shadow-2xl rounded-sm border border-border overflow-hidden"
            >
              {/* Luxury Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              
              <div className="space-y-8 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="text-primary" size={32} />
                </div>
                
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl font-light">Payment Gateway Simulation</h2>
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed px-4">
                    This is a demo environment for 15Vastram. In the production version, this would redirect to a secure Stripe/Razorpay portal.
                  </p>
                </div>

                <div className="p-6 bg-muted/50 rounded-sm text-left space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>Payable Amount</span>
                    <span>Merchant</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-heading text-2xl">₹{finalTotal.toLocaleString()}</span>
                    <span className="font-body text-xs font-semibold">15VASTRAM LUXURY</span>
                  </div>
                </div>

                <button 
                  disabled={isProcessing}
                  onClick={confirmPayment}
                  className="w-full bg-primary text-white py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  {isProcessing ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <span>Complete Payment</span>
                    </>
                  )}
                  {isProcessing && <span className="ml-2">Processing...</span>}
                </button>
                
                {!isProcessing && (
                  <button 
                    onClick={() => setShowPaymentSim(false)}
                    className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancel Transaction
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;

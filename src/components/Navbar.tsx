import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setCartOpen, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/lookbook", label: "Lookbook" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? "bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-sm h-16 md:h-20"
      : "bg-transparent border-transparent h-20 md:h-24"
      }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between h-full">
        <Link to="/" className="font-heading text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
          15Vastram
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-xs tracking-[0.2em] uppercase transition-colors hover:text-foreground ${location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative text-foreground hover:text-charcoal-light transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-primary-foreground text-[10px] font-body font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/60 backdrop-blur-xl border-b border-white/10 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-xl transition-colors ${location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

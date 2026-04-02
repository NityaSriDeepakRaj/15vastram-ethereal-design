import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setCartOpen, totalItems } = useCart();
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/lookbook", label: "Lookbook" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="font-heading text-2xl md:text-3xl font-semibold tracking-wider text-foreground">
          15Vastram
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-colors hover:text-foreground ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
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
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-xl transition-colors ${
                  location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
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

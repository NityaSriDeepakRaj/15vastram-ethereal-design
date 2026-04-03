import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Huge Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -bottom-8 opacity-[0.03]">
        <span className="text-[12rem] md:text-[24rem] font-bold tracking-[0.1em] uppercase whitespace-nowrap">HIKITY</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10">
          {/* Brand & Socials Section */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading text-4xl uppercase tracking-wider">15Vastram</h3>
              <p className="font-body text-sm text-primary-foreground/50 max-w-sm leading-relaxed tracking-wide">
                Handcrafted Indian ethnic wear that bridges heritage and modernity.
                Each piece tells a story of tradition reimagined.
              </p>
            </div>

            <div className="flex gap-6">
              {["INSTAGRAM", "PINTEREST", "WHATSAPP"].map((social) => (
                <a key={social} href="#" className="font-body text-xs tracking-[0.2em] hover:text-primary-foreground/60 transition-colors flex items-center gap-1 group">
                  {social} <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 font-semibold">Stay Updated</h4>
              <p className="font-body text-sm text-primary-foreground/50">
                Get early access to new collections and heritage insights.
              </p>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm font-body focus:outline-none flex-grow"
                />
                <button className="bg-white text-primary px-8 py-3 text-xs font-bold font-body uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:pl-20">
            <div>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-8 text-primary-foreground/40 font-semibold">Shop</h4>
              <div className="space-y-4">
                {["All Products", "Sarees", "Kurtas", "Lehengas"].map((label) => (
                  <Link key={label} to="/shop" className="block font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-8 text-primary-foreground/40 font-semibold">Company</h4>
              <div className="space-y-4">
                {["Our Heritage", "About Us", "Contact", "Privacy Policy"].map((label) => (
                  <Link key={label} to={label === "About Us" ? "/about" : "#"} className="block font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] md:text-xs tracking-[0.2em] text-primary-foreground/40 uppercase font-medium">
            <span>© 2026 15Vastram. All Rights Reserved</span>
            <span className="hidden md:block opacity-30">|</span>
            <a href="https://www.hikity.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors group">
              Made by <span className="text-primary-foreground/60 group-hover:text-primary-foreground">Hikity</span>
            </a>
          </div>
          <div className="text-[10px] md:text-xs tracking-[0.2em] text-primary-foreground/40 uppercase font-medium">
            Handcrafted with ♡ for your grace
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

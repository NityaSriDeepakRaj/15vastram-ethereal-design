import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl mb-4">15Vastram</h3>
            <p className="font-body text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
              Handcrafted Indian ethnic wear that bridges heritage and modernity. 
              Each piece tells a story of tradition reimagined.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-5 text-primary-foreground/80">Navigate</h4>
            <div className="space-y-3">
              {[{ to: "/shop", label: "Shop" }, { to: "/lookbook", label: "Lookbook" }, { to: "/about", label: "About" }].map((link) => (
                <Link key={link.to} to={link.to} className="block font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-5 text-primary-foreground/80">Connect</h4>
            <div className="space-y-3">
              {["Instagram", "Pinterest", "WhatsApp"].map((social) => (
                <a key={social} href="#" className="block font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © 2026 15Vastram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

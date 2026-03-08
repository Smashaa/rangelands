import { Link, useLocation } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const footerLinkClass = "text-sm text-primary-foreground/60 hover:text-accent transition-colors";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">RRI</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Resilient Rangelands Initiative — strengthening pastoralist communities through
              locally contextualized solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {isHome ? (
                <>
                  <button type="button" onClick={() => scrollToSection("about")} className={footerLinkClass + " text-left"}>About</button>
                  <button type="button" onClick={() => scrollToSection("sectors")} className={footerLinkClass + " text-left"}>What We Do</button>
                  <Link to="/stories" className={footerLinkClass}>Stories</Link>
                  <button type="button" onClick={() => scrollToSection("impact")} className={footerLinkClass + " text-left"}>Impact</button>
                  <button type="button" onClick={() => scrollToSection("contact")} className={footerLinkClass + " text-left"}>Contact</button>
                </>
              ) : (
                <>
                  <Link to="/" state={{ scrollTo: "about" }} className={footerLinkClass}>About</Link>
                  <Link to="/" state={{ scrollTo: "sectors" }} className={footerLinkClass}>What We Do</Link>
                  <Link to="/stories" className={footerLinkClass}>Stories</Link>
                  <Link to="/" state={{ scrollTo: "impact" }} className={footerLinkClass}>Impact</Link>
                  <Link to="/" state={{ scrollTo: "contact" }} className={footerLinkClass}>Contact</Link>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Isiolo County, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:resilientrangelandsinitiative@gmail.com" className="hover:text-accent transition-colors">
                  resilientrangelandsinitiative@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:0742182804" className="hover:text-accent transition-colors">0742182804</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Resilient Rangelands Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

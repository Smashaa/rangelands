import { Link, useLocation } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

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
                  <Link to="/campaigns" className={footerLinkClass}>Campaigns</Link>
                  <button type="button" onClick={() => scrollToSection("impact")} className={footerLinkClass + " text-left"}>Impact</button>
                  <button type="button" onClick={() => scrollToSection("contact")} className={footerLinkClass + " text-left"}>Contact</button>
                </>
              ) : (
                <>
                  <Link to="/" state={{ scrollTo: "about" }} className={footerLinkClass}>About</Link>
                  <Link to="/" state={{ scrollTo: "sectors" }} className={footerLinkClass}>What We Do</Link>
                  <Link to="/stories" className={footerLinkClass}>Stories</Link>
                  <Link to="/campaigns" className={footerLinkClass}>Campaigns</Link>
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
                <span>resilientrangelandsinitiative@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 shrink-0" />
                <span>0742182804</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Facebook className="w-4 h-4 shrink-0" aria-hidden />
                <a
                  href="https://www.facebook.com/share/18EpfG4Zs4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <TikTokIcon className="w-4 h-4 shrink-0" aria-hidden />
                <a
                  href="https://www.tiktok.com/@rri2056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  TikTok
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Instagram className="w-4 h-4 shrink-0" aria-hidden />
                <a
                  href="https://www.instagram.com/resilientrangelandsinitiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram
                </a>
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

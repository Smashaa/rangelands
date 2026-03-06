import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
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
              {["About", "What We Do", "Impact", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link === "What We Do" ? "sectors" : link.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
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

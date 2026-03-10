import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", sectionId: "about" },
  { label: "What We Do", sectionId: "sectors" },
  { label: "Stories", href: "/stories" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Impact", sectionId: "impact" },
  { label: "Contact", sectionId: "contact" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-dark/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/two.png"
            alt="RRI"
            className="h-10 w-10 rounded-lg object-cover shrink-0"
          />
          <span className="text-2xl font-display font-bold text-primary-foreground">RRI</span>
          <span className="hidden sm:inline text-sm text-primary-foreground/70 font-sans">
            Resilient Rangelands Initiative
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if ("href" in link) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              );
            }
            const sectionId = link.sectionId;
            const navClass = "text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors";
            if (isHome) {
              return (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className={navClass}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={sectionId}
                to="/"
                state={{ scrollTo: sectionId }}
                className={navClass}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-primary-dark/30"
          >
            <div className="flex flex-col items-center px-6 py-4 gap-4">
              {navLinks.map((link) => {
                if ("href" in link) {
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors text-center w-full"
                    >
                      {link.label}
                    </Link>
                  );
                }
                const sectionId = link.sectionId;
                const navClass = "text-base font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors text-center w-full";
                if (isHome) {
                  return (
                    <button
                      key={sectionId}
                      type="button"
                      onClick={() => {
                        scrollToSection(sectionId);
                        setOpen(false);
                      }}
                      className={navClass}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={sectionId}
                    to="/"
                    state={{ scrollTo: sectionId }}
                    onClick={() => setOpen(false)}
                    className={navClass}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

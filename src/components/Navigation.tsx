import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/services", label: "Services", sectionId: "services" },
  { to: "/case-studies", label: "Case Studies", sectionId: "case-studies" },
  { to: "/tools", label: "Tools", sectionId: "tools" },
  { to: "/contact", label: "Contact", sectionId: "contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((sectionId?: string) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNavClick = useCallback(
    (sectionId?: string) => {
      setIsMobileMenuOpen(false);
      scrollTo(sectionId);
    },
    [scrollTo]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="font-heading text-lg text-foreground"
        >
          Justine Jurel Valenzuela
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleNavClick(link.sectionId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link to="/contact" onClick={() => handleNavClick("contact")}>
              Work With Me
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => handleNavClick(link.sectionId)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit mt-2">
              <Link to="/contact" onClick={() => handleNavClick("contact")}>
                Work With Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
/**
 * Header Component - Sticky navigation matching pixelbloomltd.com exactly
 * Brand colors: Black, Mauve, White, Grey
 * Menu order: About, Services, Framework, Work, Contact
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/MRoznqAzixpMjDiJ.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Pixel Bloom Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Pixel Bloom" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation - All items aligned horizontally */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - White background matching pixelbloomltd.com */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white hover:bg-white/90 text-black text-sm font-medium rounded-full transition-colors duration-200"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-2.5 bg-white hover:bg-white/90 text-black text-sm font-medium rounded-full transition-colors duration-200 text-center"
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

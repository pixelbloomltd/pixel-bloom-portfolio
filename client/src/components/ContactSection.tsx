/**
 * Contact Section - Contact info and CTA
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9B7B9B]/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-16">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2
            className={`mt-4 text-3xl md:text-4xl font-light text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let's <span className="font-semibold italic">Work Together</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's discuss your project.
          </p>
        </div>

        {/* Contact Info - Centered */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Details */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-semibold text-white text-center">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:info@pixelbloomltd.com"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#9B7B9B]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#9B7B9B]/10 flex items-center justify-center">
                  <Mail size={24} className="text-[#9B7B9B]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Email</div>
                  <div className="text-white text-sm">info@pixelbloomltd.com</div>
                </div>
              </a>

              <a
                href="tel:+233506956992"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#9B7B9B]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#9B7B9B]/10 flex items-center justify-center">
                  <Phone size={24} className="text-[#9B7B9B]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Phone</div>
                  <div className="text-white text-sm">+233 (0) 50 695 6992</div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-center">
                <div className="w-14 h-14 rounded-full bg-[#9B7B9B]/10 flex items-center justify-center">
                  <MapPin size={24} className="text-[#9B7B9B]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Location</div>
                  <div className="text-white text-sm">11 K. Asante Ave, Westland, Accra</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#9B7B9B] hover:bg-[#9B7B9B]/10 hover:border-[#9B7B9B]/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

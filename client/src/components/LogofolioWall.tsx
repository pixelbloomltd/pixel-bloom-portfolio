/**
 * Logofolio Wall - Showcase of creative logo designs
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useEffect, useRef, useState } from "react";

// Logo designs with names
const logos = [
  { name: "Vexora Tech", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/ncXqzZTnmkNHpfOQ.png" },
  { name: "Lumina Creative", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/xNIpFYCZJEenIHTx.png" },
  { name: "Zenith Fit", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/uGCzScdDDnxZJpGm.png" },
  { name: "Bloom Botanics", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/qffSqBUbqLADyJVr.png" },
  { name: "Pulse Digital", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/PFLlcpuineOewPqX.png" },
  { name: "Nova Labs", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/DrBqyBxQAXxxBbKz.png" },
  { name: "Craft & Co Coffee", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/bosvrWhgLlUuwkJw.png" },
  { name: "Apex Advisory", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/YDQNcmARfpNqHElD.png" },
  { name: "Echo Media", url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/motyjmXVohslDaQb.png" },
];

export default function LogofolioWall() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-zinc-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Logo Design
          </span>
          <h2
            className={`mt-4 text-3xl md:text-4xl font-light text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our <span className="font-semibold italic">Logofolio</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Creative logo designs that embody our philosophy: Be Different. Think outside the box.
          </p>
        </div>

        {/* Logo Grid - 3x3 for 9 logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`group aspect-square rounded-2xl overflow-hidden bg-white border border-white/10 hover:border-[#9B7B9B]/50 transition-all duration-500 shadow-lg hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center p-6">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-zinc-900 py-3 px-4 text-center">
                  <span className="text-white/80 text-sm font-medium">{logo.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

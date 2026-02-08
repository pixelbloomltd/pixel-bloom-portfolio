/**
 * Hero Section - Simplified title "Our Portfolio"
 * Brand colors: Black, Mauve, White, Grey
 */

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

// Generated hero image URL
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-1_1770072625000_na1fn_aGVyby1zaG93cmVlbC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTFfMTc3MDA3MjYyNTAwMF9uYTFmbl9hR1Z5YnkxemFHOTNjbVZsYkMxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KUup3iUWbiCPa~oPUy3NVZLg1Uhd7o97gldrIAcCDMWc0jhD93px5pzYjwqzuRVR9oBvyDkqC6syC5Vy43t~wSW3JK2opJsaBCOxe1nTSnmFn8mrMdIurh92J81-NgFgYI4D9N9OZQRlCG~3M1onvKRfAMrVqIyBo5GU4Kdpg2utgwjWb5bBRqekb2dYggw8HCLgojhpGkKQ7IpNhSB9oZSkWp-WqG8PtjnyrskUaRY4ZZBBiKhJHnVMYNM1n2l5fh50-8ZbCO4lKWmOUqyiJDY8Ecz656ET2Sp~2qx1mlTRrZeTiI1aRK-qyZQ-uIgCLeRA7vqSFtynIIW0VPJEow__";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Pixel Bloom Production Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Hero Content - Centered */}
      <div className="container relative z-10 text-center">
        {/* Label - Mauve accent */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Creative Production & Marketing
          </span>
        </div>

        {/* Simple Headline - "Our Portfolio" */}
        <h1
          className={`mt-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our <span className="font-semibold italic">Portfolio</span>
        </h1>

        {/* Subtext */}
        <p
          className={`mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Premium creative agency based in Accra, Ghana. We blend high-end production with data-driven marketing strategies.
        </p>

        {/* CTAs - White primary button matching pixelbloomltd.com */}
        <div
          className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a 
            href="#work" 
            className="px-8 py-3.5 bg-white hover:bg-white/90 text-black font-medium rounded-full transition-all duration-300"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded-full transition-all duration-300"
          >
            Contact Us
          </a>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

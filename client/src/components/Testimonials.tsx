/**
 * Testimonials Section - Client feedback
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Working with Pixel Bloom was an absolute game-changer for my brand. From the branding to the pictures and videos, everything felt intentional, elevated, and true to my vision. They didn't just create content — they told my story.",
    name: "Emefa A.",
    initials: "EA",
  },
  {
    id: 2,
    quote: "The team understood our vision from day one. Their strategic approach to our marketing campaign was impressive. The quality of their video production is exceptional.",
    name: "Kwame O.",
    initials: "KO",
  },
  {
    id: 3,
    quote: "From concept to execution, Pixel Bloom delivered beyond our expectations. Their attention to detail in our brand identity project was remarkable. We now have a visual language that truly represents who we are.",
    name: "Ama B.",
    initials: "AB",
  },
];

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2
            className={`mt-4 text-3xl md:text-4xl font-light text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            What <span className="font-semibold italic">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-8 rounded-2xl bg-zinc-900/50 border border-white/5 transition-all duration-500 hover:border-[#9B7B9B]/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-[#9B7B9B]/30 mb-4" />

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#9B7B9B]/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#9B7B9B]">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="font-medium text-white">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

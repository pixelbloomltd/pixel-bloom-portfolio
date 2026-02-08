/**
 * Featured Work Sections - Large visual blocks for key categories
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

// Generated images
const IMAGES = {
  realEstate: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-2_1770072626000_na1fn_Z2hhbmEtcmVhbC1lc3RhdGUtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTJfMTc3MDA3MjYyNjAwMF9uYTFmbl9aMmhoYm1FdGNtVmhiQzFsYzNSaGRHVXRhR1Z5YncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Rs8uNoDyH~mPbI2f~-sX5skqAuFSHT6m~5hk9yO0U91YXlb5zTSgrAAYKIWXytDpugWC5E8mBV-pwG4cJVJiD2qKSsBVc61G92a-hPWZ9NwskFN5k8dq7JpKB83Wbwg0FCu3RXtKgs5vQNw4JwDZvuC2uuv7Lop2zORhMfa4sRxC74afa58yihhDZohZrm7CTJNnwZW1-ZdcexwYtP8MD2EMWFRUuiy9T1vbR51moxmBQob8JUfQ3Ud48fG~-k23Q90kYYg5d03GvbggUduqR9FbHjpKZMJXyhjaCgDqq6kHdmeGk9I9rgela8ekqFJiwU3mG1pJKXs3AZ7WFeNl7Q__",
  brandIdentity: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-3_1770072616000_na1fn_YnJhbmQtaWRlbnRpdHktc2hvd2Nhc2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTNfMTc3MDA3MjYxNjAwMF9uYTFmbl9ZbkpoYm1RdGFXUmxiblJwZEhrdGMyaHZkMk5oYzJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cxr59wqRXdfjn4B4TlreS9a4iQeiK6Yd7a6EYaiGEiy42EVzF2zcloc0o1zg5FsIMTdEB8Z~CS7xtFbC6GDqxS2za0bDu0Q89fQW98wG9gRxdM1RWTILmPSIj2~wEB--VT7gNvSuV1VWGKUHL96SG4Cc5iUceR46KWxS47GKDvAt2uckWIwAVV5kadPEUY23N1kqW-SB89LHbZDojaYKyAsmNlXmayNgDT26rQa-gnSO3A3j8ivUutVRMF8oWSncl0~QRk~V636CyFTIkfhhI-Joj6KaNRp~97YvLf8lPvlLgONp7ZsNQo0HkKmaPZv0LfwBYEaLVpP3ThbupSk~Sw__",
  photography: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-4_1770072618000_na1fn_Z2hhbmEtcGhvdG9ncmFwaHktc3R1ZGlv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTRfMTc3MDA3MjYxODAwMF9uYTFmbl9aMmhoYm1FdGNHaHZkRzluY21Gd2FIa3RjM1IxWkdsdi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EkhTUdz9e~GGuoWbWfiQKGIUrejAgd5JwVcwDvuGwQKjRsiG1xkls5e9sqz19CzvpoqwU5aNdxrdEPCSnmSL97zsnAqRrp1DoEM651LHFyFvBXK-nW9nnzNy5BAWKL7pMMGoMvcvoDAsppjMPIORJrZp-fpEqV4oRQ7FQkf7wSooEgKgj73KDs1fX-nMwm8Y7PFss3X0KTYFrirETTFDAaP5k5opoiRY4SbL2r8OQGhCmnYcrP0gM8iBvGlWMlh6WPkRX5cOKjILet7fMrIR3nNNspP~n8IDvyAHU6nUI~2zzlxFYUiM9LZlvtiJqGLSEWc5iIA94EtTHO3fXDdz5g__",
};

const featuredSections = [
  {
    id: 1,
    title: "Real Estate",
    subtitle: "Property Marketing",
    description: "From luxury apartments to coastal developments, we create compelling visual stories that showcase properties at their best.",
    image: IMAGES.realEstate,
  },
  {
    id: 2,
    title: "Brand Identity",
    subtitle: "Complete Brand Systems",
    description: "We build cohesive brand identities that resonate with audiences while maintaining global appeal.",
    image: IMAGES.brandIdentity,
  },
  {
    id: 3,
    title: "Media Production",
    subtitle: "Photo + Video",
    description: "High-end commercial production with our state-of-the-art studio in Accra. From fashion editorials to brand films.",
    image: IMAGES.photography,
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-black">
      {featuredSections.map((section, index) => (
        <FeaturedBlock key={section.id} section={section} index={index} />
      ))}
    </section>
  );
}

function FeaturedBlock({
  section,
  index,
}: {
  section: (typeof featuredSections)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={blockRef}
      className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <div
        className={`relative overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
      >
        <img
          src={section.image}
          alt={section.title}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden" />
      </div>

      {/* Content Side */}
      <div
        className={`flex items-center p-8 md:p-12 lg:p-16 xl:p-24 bg-zinc-950 ${
          isReversed ? "lg:order-1" : ""
        }`}
      >
        <div className="max-w-xl">
          {/* Label */}
          <span
            className={`text-[#9B7B9B] text-sm font-medium tracking-widest uppercase transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {section.subtitle}
          </span>

          {/* Title */}
          <h3
            className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-white transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {section.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-6 text-white/60 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {section.description}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className={`mt-8 inline-flex items-center gap-2 text-[#9B7B9B] hover:text-white hover:gap-4 transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="font-medium">Get Started</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

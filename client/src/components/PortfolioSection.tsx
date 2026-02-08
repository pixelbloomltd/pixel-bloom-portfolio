/**
 * Portfolio Section - Filterable work gallery
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useState, useEffect, useRef } from "react";

// Generated images
const IMAGES = {
  realEstate: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-2_1770072626000_na1fn_Z2hhbmEtcmVhbC1lc3RhdGUtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTJfMTc3MDA3MjYyNjAwMF9uYTFmbl9aMmhoYm1FdGNtVmhiQzFsYzNSaGRHVXRhR1Z5YncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Rs8uNoDyH~mPbI2f~-sX5skqAuFSHT6m~5hk9yO0U91YXlb5zTSgrAAYKIWXytDpugWC5E8mBV-pwG4cJVJiD2qKSsBVc61G92a-hPWZ9NwskFN5k8dq7JpKB83Wbwg0FCu3RXtKgs5vQNw4JwDZvuC2uuv7Lop2zORhMfa4sRxC74afa58yihhDZohZrm7CTJNnwZW1-ZdcexwYtP8MD2EMWFRUuiy9T1vbR51moxmBQob8JUfQ3Ud48fG~-k23Q90kYYg5d03GvbggUduqR9FbHjpKZMJXyhjaCgDqq6kHdmeGk9I9rgela8ekqFJiwU3mG1pJKXs3AZ7WFeNl7Q__",
  brandIdentity: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-3_1770072616000_na1fn_YnJhbmQtaWRlbnRpdHktc2hvd2Nhc2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTNfMTc3MDA3MjYxNjAwMF9uYTFmbl9ZbkpoYm1RdGFXUmxiblJwZEhrdGMyaHZkMk5oYzJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cxr59wqRXdfjn4B4TlreS9a4iQeiK6Yd7a6EYaiGEiy42EVzF2zcloc0o1zg5FsIMTdEB8Z~CS7xtFbC6GDqxS2za0bDu0Q89fQW98wG9gRxdM1RWTILmPSIj2~wEB--VT7gNvSuV1VWGKUHL96SG4Cc5iUceR46KWxS47GKDvAt2uckWIwAVV5kadPEUY23N1kqW-SB89LHbZDojaYKyAsmNlXmayNgDT26rQa-gnSO3A3j8ivUutVRMF8oWSncl0~QRk~V636CyFTIkfhhI-Joj6KaNRp~97YvLf8lPvlLgONp7ZsNQo0HkKmaPZv0LfwBYEaLVpP3ThbupSk~Sw__",
  photography: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-4_1770072618000_na1fn_Z2hhbmEtcGhvdG9ncmFwaHktc3R1ZGlv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTRfMTc3MDA3MjYxODAwMF9uYTFmbl9aMmhoYm1FdGNHaHZkRzluY21Gd2FIa3RjM1IxWkdsdi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EkhTUdz9e~GGuoWbWfiQKGIUrejAgd5JwVcwDvuGwQKjRsiG1xkls5e9sqz19CzvpoqwU5aNdxrdEPCSnmSL97zsnAqRrp1DoEM651LHFyFvBXK-nW9nnzNy5BAWKL7pMMGoMvcvoDAsppjMPIORJrZp-fpEqV4oRQ7FQkf7wSooEgKgj73KDs1fX-nMwm8Y7PFss3X0KTYFrirETTFDAaP5k5opoiRY4SbL2r8OQGhCmnYcrP0gM8iBvGlWMlh6WPkRX5cOKjILet7fMrIR3nNNspP~n8IDvyAHU6nUI~2zzlxFYUiM9LZlvtiJqGLSEWc5iIA94EtTHO3fXDdz5g__",
  musicStudio: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-5_1770072621000_na1fn_bXVzaWMtc3R1ZGlvLWdoYW5h.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTVfMTc3MDA3MjYyMTAwMF9uYTFmbl9iWFZ6YVdNdGMzUjFaR2x2TFdkb1lXNWguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HZx~D-cBo65A5wiZPEP9Arya~Rm9xEo3SJTnXC6z5l9i9NYcgkVikMjSgIaA2J0bezZy45S5uLJE0zifMNZ5uuPj1R1Ux5Od7~iU8cgJ4oL7GQWxuDaUjnfHCRV9Ub5Z12CMpkctrJpakh6Smv4FJ5jOywL1CZKIiph4dZtB7YXZ5PKnH86SVMmQhs9Xp2VzqUXjQMcFf7rA6gNzeUQaWeFzuQPb3zjli5JhZwEZ5LIE-mAtmjaxP9bslNcZ8BKvP2HEuLuduX9Hmt~1W3gEX5iS3oTlyp-t9NtWd2ysItoArcPc6Fj1EPHtmZTd69Qtmo~3hUuWbPT0vQIIvdfWsA__",
};

const categories = [
  "All",
  "Real Estate",
  "Brand Identity",
  "Photography",
  "Video",
  "Music/Audio",
  "Social Media",
  "Website/UI",
];

// Portfolio items - just category and image, no fake names
const portfolioItems = [
  { category: "Real Estate", image: IMAGES.realEstate },
  { category: "Brand Identity", image: IMAGES.brandIdentity },
  { category: "Photography", image: IMAGES.photography },
  { category: "Music/Audio", image: IMAGES.musicStudio },
  { category: "Real Estate", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" },
  { category: "Brand Identity", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop" },
  { category: "Video", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
  { category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" },
  { category: "Website/UI", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Selected Works
          </span>
          <h2
            className={`mt-4 text-3xl md:text-4xl font-light text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our <span className="font-semibold italic">Work</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="px-3 py-1 text-xs font-medium bg-[#9B7B9B] text-white rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

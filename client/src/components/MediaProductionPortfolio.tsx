/**
 * Media Production Portfolio Section
 * Shows Media Production work AFTER Marketing sections
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Media Production Images
const MEDIA_IMAGES = {
  // Product Shoot - Belcola
  belcolaDramatic: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/oYdFxqmfIPLyQYKd.png",
  belcolaMagical: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/YmwweKqjRqLtlkvK.png",
  
  // Brand Shoot - Geppetto
  geppetto1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/wJvCjIztsesEnYsl.jpeg",
  geppetto2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/bBsrbwbJaXjHjPTV.jpeg",
  geppetto3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/msurFAZKKsOJakhy.jpeg",
  geppetto4: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/ERkiDkDLCBrTpqZe.jpeg",
  geppetto5: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/yNEnAvkmHHgqgFBh.jpeg",
  
  // Nightie Brand - EMS
  ems1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/tuHiYfQdeJdnyxUE.jpeg",
  ems2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/boLPXPAQiEyRJTmu.jpeg",
  ems3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/jEVmWHDhnHmQplmL.jpeg",
  ems4: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/CgdSUzeSfkjKHYkg.jpeg",
  ems5: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/dKZClNLGLBpHgnPK.jpeg",
  ems6: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/HXBEHxJZuKiFHsJa.jpeg",
  ems7: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/qtcHTwhZcehLIsYI.jpeg",
  
  // Corporate Portraits
  portrait1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/FruBYAOoSEioYGRw.png",
  portrait2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/sUEirNqsQpxSRozN.png",
  
  // Video and Audio
  musicStudio: "https://private-us-east-1.manuscdn.com/sessionFile/GqUqUp8BS9K9QY5G2JT24q/sandbox/QyNRf0UTc6TYdilJ4dajVV-img-5_1770072621000_na1fn_bXVzaWMtc3R1ZGlvLWdoYW5h.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR3FVcVVwOEJTOUs5UVk1RzJKVDI0cS9zYW5kYm94L1F5TlJmMFVUYzZUWWRpbEo0ZGFqVlYtaW1nLTVfMTc3MDA3MjYyMTAwMF9uYTFmbl9iWFZ6YVdNdGMzUjFaR2x2TFdkb1lXNWguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HZx~D-cBo65A5wiZPEP9Arya~Rm9xEo3SJTnXC6z5l9i9NYcgkVikMjSgIaA2J0bezZy45S5uLJE0zifMNZ5uuPj1R1Ux5Od7~iU8cgJ4oL7GQWxuDaUjnfHCRV9Ub5Z12CMpkctrJpakh6Smv4FJ5jOywL1CZKIiph4dZtB7YXZ5PKnH86SVMmQhs9Xp2VzqUXjQMcFf7rA6gNzeUQaWeFzuQPb3zjli5JhZwEZ5LIE-mAtmjaxP9bslNcZ8BKvP2HEuLuduX9Hmt~1W3gEX5iS3oTlyp-t9NtWd2ysItoArcPc6Fj1EPHtmZTd69Qtmo~3hUuWbPT0vQIIvdfWsA__",
  
  // Video Production
  emsVideo1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/CNLAGWemDHLTNHiF.MP4",
  emsVideo2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/MUyYHNypkSfPSAda.MOV",
  geppettoVideo1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/iqORTAxifPQQKOee.MOV",
  geppettoVideo2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/CDRcJjnEolbbNuvL.MOV",
  jobelVideo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/zMTaydJtWlUjuEbB.MOV",
  
  // Video Thumbnails (extracted from actual videos)
  emsVideo1Thumb: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/zgTRPDdwpsSlCnKJ.jpg",
  emsVideo2Thumb: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/bZlAfPxjdiTYCUZv.jpg",
  geppettoVideo1Thumb: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/xdNEfaSJbuxcDTcA.jpg",
  geppettoVideo2Thumb: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/FUTSgBhUopETeaEF.jpg",
  jobelVideoThumb: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/GTQpQsmNSPwLhyou.jpg",
};

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  video?: string;
  description?: string;
}

const mediaSubsections = [
  {
    id: "photography",
    title: "Photography",
    description: "Professional photography for brands, products, and events",
    projects: [
      // Product Shoot - Belcola
      {
        id: "ph-1",
        title: "Belcola Dramatic",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.belcolaDramatic,
        images: [MEDIA_IMAGES.belcolaDramatic],
        description: "Dramatic product photography for Belcola"
      },
      {
        id: "ph-2",
        title: "Belcola Magical",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.belcolaMagical,
        images: [MEDIA_IMAGES.belcolaMagical],
        description: "Magical product photography for Belcola"
      },
      // Brand Shoot - Geppetto
      {
        id: "ph-3",
        title: "Geppetto Brand 1",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.geppetto1,
        images: [MEDIA_IMAGES.geppetto1],
        description: "Brand photography for Geppetto"
      },
      {
        id: "ph-4",
        title: "Geppetto Brand 2",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.geppetto2,
        images: [MEDIA_IMAGES.geppetto2],
        description: "Brand photography for Geppetto"
      },
      {
        id: "ph-5",
        title: "Geppetto Brand 3",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.geppetto3,
        images: [MEDIA_IMAGES.geppetto3],
        description: "Brand photography for Geppetto"
      },
      {
        id: "ph-6",
        title: "Geppetto Brand 4",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.geppetto4,
        images: [MEDIA_IMAGES.geppetto4],
        description: "Brand photography for Geppetto"
      },
      {
        id: "ph-7",
        title: "Geppetto Brand 5",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.geppetto5,
        images: [MEDIA_IMAGES.geppetto5],
        description: "Brand photography for Geppetto"
      },
      // Nightie Brand - EMS
      {
        id: "ph-8",
        title: "EMS Nightwear 1",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems1,
        images: [MEDIA_IMAGES.ems1],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-9",
        title: "EMS Nightwear 2",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems2,
        images: [MEDIA_IMAGES.ems2],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-10",
        title: "EMS Nightwear 3",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems3,
        images: [MEDIA_IMAGES.ems3],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-11",
        title: "EMS Nightwear 4",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems4,
        images: [MEDIA_IMAGES.ems4],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-12",
        title: "EMS Nightwear 5",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems5,
        images: [MEDIA_IMAGES.ems5],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-13",
        title: "EMS Nightwear 6",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems6,
        images: [MEDIA_IMAGES.ems6],
        description: "Fashion photography for EMS nightwear"
      },
      {
        id: "ph-14",
        title: "EMS Nightwear 7",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.ems7,
        images: [MEDIA_IMAGES.ems7],
        description: "Fashion photography for EMS nightwear"
      },
      // Corporate Portraits
      {
        id: "ph-15",
        title: "Corporate Portrait 1",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.portrait1,
        images: [MEDIA_IMAGES.portrait1],
        description: "Professional corporate headshot"
      },
      {
        id: "ph-16",
        title: "Corporate Portrait 2",
        category: "Photography",
        thumbnail: MEDIA_IMAGES.portrait2,
        images: [MEDIA_IMAGES.portrait2],
        description: "Professional corporate headshot"
      },
    ] as Project[]
  },
  {
    id: "video",
    title: "Video Production",
    description: "Cinematic video content for commercials, documentaries, and social media",
    projects: [
      // EMS Nightwear Videos
      {
        id: "vp-1",
        title: "EMS Nightwear Video 1",
        category: "Video",
        thumbnail: MEDIA_IMAGES.emsVideo1Thumb,
        video: MEDIA_IMAGES.emsVideo1,
        images: [MEDIA_IMAGES.emsVideo1Thumb],
        description: "Fashion video for EMS nightwear brand"
      },
      {
        id: "vp-2",
        title: "EMS Nightwear Video 2",
        category: "Video",
        thumbnail: MEDIA_IMAGES.emsVideo2Thumb,
        video: MEDIA_IMAGES.emsVideo2,
        images: [MEDIA_IMAGES.emsVideo2Thumb],
        description: "Fashion video for EMS nightwear brand"
      },
      // Geppetto Videos
      {
        id: "vp-3",
        title: "Geppetto Video 1",
        category: "Video",
        thumbnail: MEDIA_IMAGES.geppettoVideo1Thumb,
        video: MEDIA_IMAGES.geppettoVideo1,
        images: [MEDIA_IMAGES.geppettoVideo1Thumb],
        description: "Brand video for Geppetto"
      },
      {
        id: "vp-4",
        title: "Geppetto Video 2",
        category: "Video",
        thumbnail: MEDIA_IMAGES.geppettoVideo2Thumb,
        video: MEDIA_IMAGES.geppettoVideo2,
        images: [MEDIA_IMAGES.geppettoVideo2Thumb],
        description: "Brand video for Geppetto"
      },
      // Jobel Video
      {
        id: "vp-5",
        title: "Jobel Video",
        category: "Video",
        thumbnail: MEDIA_IMAGES.jobelVideoThumb,
        video: MEDIA_IMAGES.jobelVideo,
        images: [MEDIA_IMAGES.jobelVideoThumb],
        description: "Brand video for Jobel"
      },
    ] as Project[]
  },
  {
    id: "audio",
    title: "Audio Production",
    description: "Professional audio recording, mixing, and mastering",
    projects: [
      {
        id: "ap-1",
        title: "Music Production",
        category: "Audio",
        thumbnail: MEDIA_IMAGES.musicStudio,
        images: [MEDIA_IMAGES.musicStudio],
        description: "Professional music recording and production"
      },
    ] as Project[]
  },
];

const filterCategories = ["All", "Photography", "Video", "Audio"];

export default function MediaProductionPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const getFilteredSubsections = () => {
    if (activeFilter === "All") {
      return mediaSubsections;
    }
    return mediaSubsections.filter(section => 
      section.projects.some(project => project.category === activeFilter)
    ).map(section => ({
      ...section,
      projects: section.projects.filter(project => project.category === activeFilter)
    }));
  };

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filteredSubsections = getFilteredSubsections();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-zinc-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Media Production
          </span>
          <h2
            className={`mt-4 text-3xl md:text-4xl font-light text-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Creative <span className="font-semibold italic">Production</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            High-quality media production services for photography, video, and audio
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#9B7B9B] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Subsections */}
        <div className="space-y-20">
          {filteredSubsections.map((subsection, sectionIndex) => (
            <div key={subsection.id} className="space-y-8">
              {/* Subsection Header - CENTERED */}
              <div
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${sectionIndex * 100}ms` }}
              >
                <h3 className="text-2xl md:text-3xl font-light text-white">
                  {subsection.title}
                </h3>
                <p className="mt-2 text-white/50 max-w-xl mx-auto">
                  {subsection.description}
                </p>
              </div>

              {/* Projects Grid - CENTERED */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {subsection.projects.map((project, projectIndex) => (
                  <div
                    key={project.id}
                    onClick={() => openLightbox(project)}
                    className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${(sectionIndex * 100) + (projectIndex * 50)}ms` }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-3 py-1 text-xs font-medium bg-[#9B7B9B] text-white rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h4 className="mt-3 text-lg font-medium text-white">
                        {project.title}
                      </h4>
                    </div>

                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80">
                        {project.images.length} images
                      </div>
                    )}
                    {project.video && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-[#9B7B9B] backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        Video
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900">
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              )}

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <span className="px-3 py-1 text-xs font-medium bg-[#9B7B9B] text-white rounded-full uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="mt-4 text-2xl font-light text-white">
                {selectedProject.title}
              </h3>
              {selectedProject.description && (
                <p className="mt-2 text-white/60 max-w-lg mx-auto">
                  {selectedProject.description}
                </p>
              )}
            </div>

            {selectedProject.images.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {selectedProject.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-[#9B7B9B] opacity-100"
                        : "border-transparent opacity-50 hover:opacity-75"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Marketing Portfolio Section - 5 Marketing Subsections
 * Shows Marketing work FIRST before Media Production
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 * 
 * Subsections:
 * 1. Brand Identity Systems
 * 2. Marketing Campaigns
 * 3. Digital Marketing Assets
 * 4. Content Marketing
 * 5. Performance & Analytics
 */

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Marketing Portfolio Images - Real brand identity projects
const MARKETING_IMAGES = {
  // Brand Identity Systems - Kokoo Kitchen, Sankofa Tech, Aseda, Vault Capital, Harvest Gold
  kokooKitchenBrandBoard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/aNIPaBgOKIxTNiTx.png",
  kokooKitchenMockups: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/ItVTRRKeoZhIOJBO.png",
  sankofaTechBrandBoard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/hZmAGnSYShZIKdiQ.png",
  sankofaTechMockups: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/KTiOcnsWqUBXDOcw.png",
  asedaBrandBoard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/vvFrCFuTHJGsZowF.png",
  asedaMockups: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/uFGjhBEDgVpzSwBN.png",
  vaultCapitalBrandBoard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/xNEhOocsQCqaPRUG.png",
  harvestGoldBrandBoard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/LEItLaXDrWDFsMee.png",
  
  // Marketing Campaigns - Real billboard and poster campaigns
  primeEstatesBillboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/CkGnmetuNKziHxrz.png",
  primeEstatesPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/GxSWLLIRVykHXDHf.png",
  vaultCapitalPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/cznjUOSQUJvQrIDa.png",
  vaultCapitalEvent: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/hoTTyFkWHXwUHgHU.png",
  glowNaturalsBillboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/XjvLDEErfLUNFNtg.png",
  glowNaturalsLaunch: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/WsSSmMVrTFdNPhfy.png",
  lifewellClinicBillboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/NMyksEZPkfyipigb.png",
  lifewellClinicPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/yoBEztYUaLpCGNVI.png",
  harvestGoldBillboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/gWiInnFuBZszyppH.png",
  spiceSoulBillboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/XKlaUNDxKTlzrkNo.png",
  brightFuturesPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/gUCAtdFVyimrBPuJ.png",
  
  // Digital Marketing Assets - Real social media ads
  adGroundnuts: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/eXJetXFnvwUznbpn.png",
  adMangoes: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/tjdBjrhfMslJNOaS.png",
  adHibiscusDrink: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/DQGVBWsMZbvEwfWQ.png",
  adGrilledChicken: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/polpHfTwEYlNAZxO.png",
  adMobilePayment: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/HmFgrDJOrYECQqOF.png",
  adPalmWine: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/ehPypCGrlXxWcYOv.png",
  // Banners and Rollups
  ghanaConferenceBanner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/UXTBktTribhChmAe.png",
  havenPropertiesBanner: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/MgxTDIUTXYxsLcBG.png",
  premierEstatesRollup: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/PTRDysNLTEHwgEzC.png",
  
  // Content Marketing - By Sector
  // Finance / Fintech - CashWise
  cashwise01: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/cGhUtBxRVYykMVLa.png",
  cashwise05: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/FVvvKjifUPmcztfv.png",
  cashwise09: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/DcggSmlEiiRzDvbz.png",
  // Food & Hospitality - ChopBox
  chopbox09: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/jgxusFjebwxVuwui.png",
  // Real Estate - GoldKey Properties
  goldkey06: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/kMuWOYkQNqVtwMia.png",
  goldkey08: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/cJlFwbpDaIXVlYQB.png",
  // Agriculture - AgriBoost
  agriboost02: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/UQWwvoSVzbDLxoOX.png",
  agriboost03: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/merUgcQArvPCDTzG.png",
  farmToTable: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/ARAaQHQkIfxSsyhO.png",
  // Fashion & Lifestyle - KenteKings, Wear Heritage
  kentekings02: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/CQkCnSpTrxkJzzVu.png",
  wearHeritage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/kDfKxoJyCjJysGJc.png",
  // Sustainability / Green Energy
  futureGreen: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/vVyCxVgtffnXLZXL.png",
  // Telecommunications
  connectingGhana: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/tevEyNroAnsVWXQu.png",
  stayConnected: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/RGuojBWyqDreBQWF.png",
  // Retail / E-commerce
  bestDeals: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/NXHIDAmxeAXnWAjn.png",
  
  // Performance & Analytics - GhanaDash Dashboard visualizations
  ghanaDashMarketing: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/sncPOWuYGmhQJHzt.png",
  ghanaDashEcommerce: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/dNSRfPaQfiZmKfVE.png",
  ghanaDashSalesRevenue: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/GZkEFMPBlNRnWDlf.png",
};

// Project data structure
interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description?: string;
}

// Marketing subsections with projects - REALISTIC NAMES (no tribal references)
const marketingSubsections = [
  {
    id: "brand-identity",
    title: "Brand Identity Systems",
    description: "Complete visual identity systems that define how brands look, feel, and communicate",
    projects: [
      {
        id: "bi-1",
        title: "Kokoo Kitchen",
        category: "Brand Identity",
        thumbnail: MARKETING_IMAGES.kokooKitchenBrandBoard,
        images: [MARKETING_IMAGES.kokooKitchenBrandBoard, MARKETING_IMAGES.kokooKitchenMockups],
        description: "Restaurant brand identity - Taste the Soul of Ghana"
      },
      {
        id: "bi-2",
        title: "Sankofa Tech",
        category: "Brand Identity",
        thumbnail: MARKETING_IMAGES.sankofaTechBrandBoard,
        images: [MARKETING_IMAGES.sankofaTechBrandBoard, MARKETING_IMAGES.sankofaTechMockups],
        description: "Tech company brand - Building Tomorrow from Our Roots"
      },
      {
        id: "bi-3",
        title: "Aseda",
        category: "Brand Identity",
        thumbnail: MARKETING_IMAGES.asedaBrandBoard,
        images: [MARKETING_IMAGES.asedaBrandBoard, MARKETING_IMAGES.asedaMockups],
        description: "Natural skincare brand - Nature's Gift to Your Skin"
      },
      {
        id: "bi-4",
        title: "Vault Capital",
        category: "Brand Identity",
        thumbnail: MARKETING_IMAGES.vaultCapitalBrandBoard,
        images: [MARKETING_IMAGES.vaultCapitalBrandBoard],
        description: "Financial services brand - Securing Your Tomorrow"
      },
      {
        id: "bi-5",
        title: "Harvest Gold",
        category: "Brand Identity",
        thumbnail: MARKETING_IMAGES.harvestGoldBrandBoard,
        images: [MARKETING_IMAGES.harvestGoldBrandBoard],
        description: "Agricultural brand - From Ghana's Soil to the World"
      },
    ] as Project[]
  },
  {
    id: "campaigns",
    title: "Marketing Campaigns",
    description: "Strategic campaigns that drive awareness, engagement, and conversions",
    projects: [
      {
        id: "mc-1",
        title: "Prime Estates",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.primeEstatesBillboard,
        images: [MARKETING_IMAGES.primeEstatesBillboard, MARKETING_IMAGES.primeEstatesPoster],
        description: "Real estate billboard and poster campaign"
      },
      {
        id: "mc-2",
        title: "Vault Capital",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.vaultCapitalPoster,
        images: [MARKETING_IMAGES.vaultCapitalPoster, MARKETING_IMAGES.vaultCapitalEvent],
        description: "Financial services campaign - poster and event materials"
      },
      {
        id: "mc-3",
        title: "Glow Naturals",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.glowNaturalsBillboard,
        images: [MARKETING_IMAGES.glowNaturalsBillboard, MARKETING_IMAGES.glowNaturalsLaunch],
        description: "Beauty brand launch - billboard and promotional materials"
      },
      {
        id: "mc-4",
        title: "Lifewell Clinic",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.lifewellClinicBillboard,
        images: [MARKETING_IMAGES.lifewellClinicBillboard, MARKETING_IMAGES.lifewellClinicPoster],
        description: "Healthcare awareness campaign - billboard and poster"
      },
      {
        id: "mc-5",
        title: "Harvest Gold",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.harvestGoldBillboard,
        images: [MARKETING_IMAGES.harvestGoldBillboard],
        description: "Agricultural brand outdoor advertising"
      },
      {
        id: "mc-6",
        title: "Spice Soul",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.spiceSoulBillboard,
        images: [MARKETING_IMAGES.spiceSoulBillboard],
        description: "Restaurant brand billboard campaign"
      },
      {
        id: "mc-7",
        title: "Bright Futures",
        category: "Campaigns",
        thumbnail: MARKETING_IMAGES.brightFuturesPoster,
        images: [MARKETING_IMAGES.brightFuturesPoster],
        description: "Education sector promotional poster"
      },
    ] as Project[]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Assets",
    description: "High-converting digital assets for social media, web, and paid advertising",
    projects: [
      {
        id: "dm-1",
        title: "Fresh Roasted Groundnuts",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adGroundnuts,
        images: [MARKETING_IMAGES.adGroundnuts],
        description: "Food product social media advertisement"
      },
      {
        id: "dm-2",
        title: "Fresh Mangoes",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adMangoes,
        images: [MARKETING_IMAGES.adMangoes],
        description: "Fresh produce promotional ad"
      },
      {
        id: "dm-3",
        title: "Natural Hibiscus Drink",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adHibiscusDrink,
        images: [MARKETING_IMAGES.adHibiscusDrink],
        description: "Organic beverage brand advertisement"
      },
      {
        id: "dm-4",
        title: "Grilled Chicken",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adGrilledChicken,
        images: [MARKETING_IMAGES.adGrilledChicken],
        description: "Restaurant food delivery promotion"
      },
      {
        id: "dm-5",
        title: "Mobile Payment App",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adMobilePayment,
        images: [MARKETING_IMAGES.adMobilePayment],
        description: "Fintech app promotional campaign"
      },
      {
        id: "dm-6",
        title: "Premium Palm Wine",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.adPalmWine,
        images: [MARKETING_IMAGES.adPalmWine],
        description: "Traditional beverage brand advertisement"
      },
      {
        id: "dm-7",
        title: "Ghana Parliament Conference",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.ghanaConferenceBanner,
        images: [MARKETING_IMAGES.ghanaConferenceBanner],
        description: "Public Accounts Committee 2026 National Conference flying banner"
      },
      {
        id: "dm-8",
        title: "Haven Properties",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.havenPropertiesBanner,
        images: [MARKETING_IMAGES.havenPropertiesBanner],
        description: "Luxury real estate rollup banner - The Pinnacle Collection"
      },
      {
        id: "dm-9",
        title: "Premier Estates Skyview",
        category: "Digital Marketing",
        thumbnail: MARKETING_IMAGES.premierEstatesRollup,
        images: [MARKETING_IMAGES.premierEstatesRollup],
        description: "Real estate rollup banner - Skyview Residences, Accra"
      },
    ] as Project[]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Strategic content systems that build authority and drive organic growth",
    projects: [
      {
        id: "cm-1",
        title: "CashWise Smart Money",
        category: "Content",
        thumbnail: MARKETING_IMAGES.cashwise01,
        images: [MARKETING_IMAGES.cashwise01],
        description: "Mobile banking app promotional content"
      },
      {
        id: "cm-2",
        title: "CashWise Save Smart",
        category: "Content",
        thumbnail: MARKETING_IMAGES.cashwise05,
        images: [MARKETING_IMAGES.cashwise05],
        description: "Savings and wealth growth campaign"
      },
      {
        id: "cm-3",
        title: "CashWise Download",
        category: "Content",
        thumbnail: MARKETING_IMAGES.cashwise09,
        images: [MARKETING_IMAGES.cashwise09],
        description: "App download promotional content"
      },
      {
        id: "cm-4",
        title: "ChopBox Order Now",
        category: "Content",
        thumbnail: MARKETING_IMAGES.chopbox09,
        images: [MARKETING_IMAGES.chopbox09],
        description: "Food delivery app promotional content"
      },
      {
        id: "cm-5",
        title: "GoldKey Invest in Land",
        category: "Content",
        thumbnail: MARKETING_IMAGES.goldkey06,
        images: [MARKETING_IMAGES.goldkey06],
        description: "Real estate investment promotional content"
      },
      {
        id: "cm-6",
        title: "GoldKey Property Plans",
        category: "Content",
        thumbnail: MARKETING_IMAGES.goldkey08,
        images: [MARKETING_IMAGES.goldkey08],
        description: "Property development promotional content"
      },
      {
        id: "cm-7",
        title: "AgriBoost Fresh Produce",
        category: "Content",
        thumbnail: MARKETING_IMAGES.agriboost02,
        images: [MARKETING_IMAGES.agriboost02],
        description: "Fresh produce promotional content"
      },
      {
        id: "cm-8",
        title: "AgriBoost Our Farmers",
        category: "Content",
        thumbnail: MARKETING_IMAGES.agriboost03,
        images: [MARKETING_IMAGES.agriboost03],
        description: "Farmer empowerment campaign content"
      },
      {
        id: "cm-9",
        title: "Farm to Table",
        category: "Content",
        thumbnail: MARKETING_IMAGES.farmToTable,
        images: [MARKETING_IMAGES.farmToTable],
        description: "Farm-to-table family dining content"
      },
      {
        id: "cm-10",
        title: "KenteKings Collection",
        category: "Content",
        thumbnail: MARKETING_IMAGES.kentekings02,
        images: [MARKETING_IMAGES.kentekings02],
        description: "Premium Kente fashion collection"
      },
      {
        id: "cm-11",
        title: "Wear Heritage",
        category: "Content",
        thumbnail: MARKETING_IMAGES.wearHeritage,
        images: [MARKETING_IMAGES.wearHeritage],
        description: "Heritage fashion brand content"
      },
      {
        id: "cm-12",
        title: "Future Green",
        category: "Content",
        thumbnail: MARKETING_IMAGES.futureGreen,
        images: [MARKETING_IMAGES.futureGreen],
        description: "Green energy and sustainability content"
      },
      {
        id: "cm-13",
        title: "ConnectGH Network",
        category: "Content",
        thumbnail: MARKETING_IMAGES.connectingGhana,
        images: [MARKETING_IMAGES.connectingGhana],
        description: "Telecommunications connectivity campaign"
      },
      {
        id: "cm-14",
        title: "ConnectGH More Talk",
        category: "Content",
        thumbnail: MARKETING_IMAGES.stayConnected,
        images: [MARKETING_IMAGES.stayConnected],
        description: "Telecommunications promotional content"
      },
      {
        id: "cm-15",
        title: "Best Deals Retail",
        category: "Content",
        thumbnail: MARKETING_IMAGES.bestDeals,
        images: [MARKETING_IMAGES.bestDeals],
        description: "Retail promotional content"
      },
    ] as Project[]
  },
  {
    id: "analytics",
    title: "Performance & Analytics",
    description: "Data-driven insights that optimize campaigns and maximize ROI",
    projects: [
      {
        id: "pa-1",
        title: "GhanaDash Marketing Intelligence",
        category: "Analytics",
        thumbnail: MARKETING_IMAGES.ghanaDashMarketing,
        images: [MARKETING_IMAGES.ghanaDashMarketing],
        description: "Marketing performance dashboard with conversions, revenue trends, and social media metrics"
      },
      {
        id: "pa-2",
        title: "GhanaDash E-commerce Analytics",
        category: "Analytics",
        thumbnail: MARKETING_IMAGES.ghanaDashEcommerce,
        images: [MARKETING_IMAGES.ghanaDashEcommerce],
        description: "E-commerce dashboard with orders, customers, sales by region, and product performance"
      },
      {
        id: "pa-3",
        title: "GhanaDash Sales & Revenue",
        category: "Analytics",
        thumbnail: MARKETING_IMAGES.ghanaDashSalesRevenue,
        images: [MARKETING_IMAGES.ghanaDashSalesRevenue],
        description: "Sales overview dashboard with revenue trends, transactions, and category breakdown"
      },
    ] as Project[]
  },
];

// Filter categories
const filterCategories = [
  "All",
  "Brand Identity",
  "Campaigns",
  "Digital Marketing",
  "Content",
  "Analytics",
];

export default function MarketingPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active filter
  const getFilteredSubsections = () => {
    if (activeFilter === "All") {
      return marketingSubsections;
    }
    return marketingSubsections.filter(subsection => 
      subsection.projects.some(project => project.category === activeFilter)
    ).map(subsection => ({
      ...subsection,
      projects: subsection.projects.filter(project => project.category === activeFilter)
    }));
  };

  // Open lightbox with project
  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Navigate images
  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentImageIndex, selectedProject]);

  // Handle click outside lightbox
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
        closeLightbox();
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLightboxOpen]);

  const filteredSubsections = getFilteredSubsections();

  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">
            Marketing Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategic marketing solutions that drive growth, build brands, and deliver measurable results
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#9B7B9B] text-white"
                  : "bg-zinc-800/50 text-gray-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Marketing Subsections */}
        <div className="space-y-20">
          {filteredSubsections.map((subsection) => (
            <div key={subsection.id} className="text-center">
              {/* Subsection Header */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-3">
                  {subsection.title}
                </h3>
                <p className="text-gray-500 max-w-xl mx-auto">
                  {subsection.description}
                </p>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {subsection.projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openLightbox(project)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-zinc-900 aspect-[4/3]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-[#9B7B9B] text-xs font-medium tracking-widest uppercase">
                            {project.category}
                          </span>
                          <h4 className="text-white text-lg font-medium mt-1">
                            {project.title}
                          </h4>
                          {project.images.length > 1 && (
                            <span className="text-gray-400 text-sm mt-2 block">
                              {project.images.length} images
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <div ref={lightboxRef} className="relative max-w-5xl w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Project Info */}
            <div className="text-center mb-6">
              <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-white text-2xl font-serif italic mt-2">
                {selectedProject.title}
              </h3>
              {selectedProject.description && (
                <p className="text-gray-400 text-sm mt-2">
                  {selectedProject.description}
                </p>
              )}
            </div>

            {/* Image Container */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white transition-all ${
                      currentImageIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/70"
                    }`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white transition-all ${
                      currentImageIndex === selectedProject.images.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/70"
                    }`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}
            {selectedProject.images.length > 1 && (
              <div className="text-center mt-4">
                <span className="text-gray-400 text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

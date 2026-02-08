/**
 * PIXEL BLOOM PORTFOLIO - Home Page
 * Design: Dark editorial with mauve accents
 * Matching pixelbloomltd.com visual identity
 * 
 * Section order: 
 * Hero → About → Services → Framework → Tools → 
 * MARKETING WORK (5 subsections) → MEDIA PRODUCTION → 
 * Logofolio → Contact
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CapabilitySnapshot from "@/components/CapabilitySnapshot";
import BloomFramework from "@/components/BloomFramework";
import ToolsSection from "@/components/ToolsSection";
import MarketingPortfolio from "@/components/MarketingPortfolio";
import MediaProductionPortfolio from "@/components/MediaProductionPortfolio";
import LogofolioWall from "@/components/LogofolioWall";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CapabilitySnapshot />
        <BloomFramework />
        <ToolsSection />
        {/* Marketing Work FIRST - 5 subsections */}
        <MarketingPortfolio />
        {/* Media Production AFTER Marketing */}
        <MediaProductionPortfolio />
        <LogofolioWall />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

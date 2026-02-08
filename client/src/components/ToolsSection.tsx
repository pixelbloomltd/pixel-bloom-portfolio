/**
 * Tools & Apps Section - Full Adobe Suite, Microsoft Suite, and other tools
 * Using inline SVGs for reliable display
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { useState } from "react";
import { motion } from "framer-motion";

// Adobe Suite apps with their brand colors
const adobeApps = [
  { name: "Photoshop", abbr: "Ps", color: "#31A8FF", bgColor: "#001E36" },
  { name: "Illustrator", abbr: "Ai", color: "#FF9A00", bgColor: "#330000" },
  { name: "Premiere Pro", abbr: "Pr", color: "#9999FF", bgColor: "#00005B" },
  { name: "After Effects", abbr: "Ae", color: "#9999FF", bgColor: "#00005B" },
  { name: "InDesign", abbr: "Id", color: "#FF3366", bgColor: "#49021F" },
  { name: "Lightroom", abbr: "Lr", color: "#31A8FF", bgColor: "#001E36" },
  { name: "XD", abbr: "Xd", color: "#FF61F6", bgColor: "#470137" },
  { name: "Audition", abbr: "Au", color: "#9999FF", bgColor: "#00005B" },
];

// Microsoft Suite apps with inline SVG icons
const microsoftApps = [
  { 
    name: "Word", 
    color: "#2B579A",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#2B579A"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#41A5EE"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#2B579A"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#185ABD"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">W</text>
    </svg>`
  },
  { 
    name: "Excel", 
    color: "#217346",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#217346"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#33C481"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#217346"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#107C41"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">X</text>
    </svg>`
  },
  { 
    name: "PowerPoint", 
    color: "#B7472A",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#B7472A"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#ED6C47"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#B7472A"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#C43E1C"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">P</text>
    </svg>`
  },
  { 
    name: "Outlook", 
    color: "#0078D4",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#0078D4"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#28A8EA"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#0078D4"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#0364B8"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">O</text>
    </svg>`
  },
  { 
    name: "Teams", 
    color: "#6264A7",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#6264A7"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#7B83EB"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#6264A7"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#505AC9"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">T</text>
    </svg>`
  },
  { 
    name: "OneNote", 
    color: "#7719AA",
    svg: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="8" fill="#7719AA"/>
      <path d="M78 24H42v48h36c1.1 0 2-.9 2-2V26c0-1.1-.9-2-2-2z" fill="#CA64EA"/>
      <path d="M42 24H18c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h24V24z" fill="#7719AA"/>
      <path d="M56 36H42v24h14c1.1 0 2-.9 2-2V38c0-1.1-.9-2-2-2z" fill="#80397B"/>
      <text x="28" y="58" fill="white" font-size="28" font-weight="bold" font-family="Arial">N</text>
    </svg>`
  },
];

// SVG tools
const svgTools = [
  { 
    name: "Figma", 
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24C24 20.6863 26.6863 18 30 18C33.3137 18 36 20.6863 36 24C36 27.3137 33.3137 30 30 30C26.6863 30 24 27.3137 24 24Z" fill="#1ABCFE"/>
      <path d="M12 36C12 32.6863 14.6863 30 18 30H24V36C24 39.3137 21.3137 42 18 42C14.6863 42 12 39.3137 12 36Z" fill="#0ACF83"/>
      <path d="M24 6V18H30C33.3137 18 36 15.3137 36 12C36 8.68629 33.3137 6 30 6H24Z" fill="#FF7262"/>
      <path d="M12 12C12 15.3137 14.6863 18 18 18H24V6H18C14.6863 6 12 8.68629 12 12Z" fill="#F24E1E"/>
      <path d="M12 24C12 27.3137 14.6863 30 18 30H24V18H18C14.6863 18 12 20.6863 12 24Z" fill="#A259FF"/>
    </svg>`
  },
  { 
    name: "Notion", 
    svg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="white"/>
      <path d="M10 8L32 6.5c2.5-.2 3.1 0 4.7 1.1l6.4 4.5c1.1.8 1.4 1 1.4 1.8v24.8c0 1.6-.6 2.5-2.6 2.6L17.5 42.5c-1.5.1-2.2-.2-3-1.2l-5.4-6.7c-.9-1.1-1.2-2-1.2-3V10.4c0-1.3.6-2.3 2.1-2.8z" fill="white" stroke="black" stroke-width="1.5"/>
      <path d="M17.5 12.5c-2 .1-2.4.1-3.5-.8l-2.8-2.2c-.3-.3-.2-.6.6-.7l19.4-1.4c1.6-.2 2.5.4 3.1 1l3.3 2.4c.2.1.5.5.1.5l-20 1.2h-.2z" fill="black"/>
      <path d="M14 32V16.3c0-.9.3-1.4 1.1-1.5l21-1.2c.8 0 1.1.5 1.1 1.4v15.8c0 .9-.2 1.7-1.4 1.8l-20.4 1.2c-1.3 0-1.8-.4-1.8-1.5z" fill="white"/>
      <path d="M31.5 17.5c.2.6 0 1.3-.6 1.3l-1.1.2v15.6c-.9.5-1.8.8-2.5.8-1.1 0-1.4-.4-2.3-1.5l-7.2-11.3v10.9l2.2.5s0 1.3-1.8 1.3l-4.9.3c-.2-.3 0-1 .5-1.1l1.3-.4V19.4l-1.8-.1c-.2-.6.2-1.6 1.2-1.7l5.2-.3 7.5 11.5v-10.2l-1.9-.2c-.2-.8.5-1.4 1.2-1.4l4.9-.3z" fill="black"/>
    </svg>`
  },
];

// DaVinci Resolve with actual logo image
const davinciResolve = {
  name: "DaVinci Resolve",
  imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663266402806/BrKLqQDeilgynIwF.jpg"
};

export default function ToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Tools We Use
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light text-white">
            Industry-Leading <span className="font-serif italic text-[#9B7B9B]">Software</span>
          </h2>
        </motion.div>

        {/* Adobe Creative Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 text-center">
            Adobe Creative Suite
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {adobeApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredTool(app.name)}
                onMouseLeave={() => setHoveredTool(null)}
                className="group relative"
              >
                <div
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    hoveredTool === app.name ? "scale-110 shadow-lg" : ""
                  }`}
                  style={{
                    backgroundColor: app.bgColor,
                    boxShadow: hoveredTool === app.name ? `0 8px 30px ${app.color}40` : "none"
                  }}
                >
                  <span
                    className="text-base md:text-lg font-bold"
                    style={{ color: app.color }}
                  >
                    {app.abbr}
                  </span>
                </div>
                {/* Tooltip */}
                <div
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-white/60 transition-opacity duration-200 ${
                    hoveredTool === app.name ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {app.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Microsoft Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 text-center">
            Microsoft 365
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {microsoftApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredTool(app.name)}
                onMouseLeave={() => setHoveredTool(null)}
                className="group relative"
              >
                <div
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
                    hoveredTool === app.name ? "scale-110 shadow-lg" : ""
                  }`}
                  style={{
                    boxShadow: hoveredTool === app.name ? `0 8px 30px ${app.color}40` : "none"
                  }}
                  dangerouslySetInnerHTML={{ __html: app.svg }}
                />
                {/* Tooltip */}
                <div
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-white/60 transition-opacity duration-200 ${
                    hoveredTool === app.name ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {app.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4 text-center">
            Other Tools
          </h3>
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
            {/* Figma */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0 }}
              onMouseEnter={() => setHoveredTool("Figma")}
              onMouseLeave={() => setHoveredTool(null)}
              className="group relative flex flex-col items-center"
            >
              <div
                className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 ${
                  hoveredTool === "Figma" ? "scale-110" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: svgTools[0].svg }}
              />
              <span
                className={`mt-3 text-[10px] transition-colors duration-200 ${
                  hoveredTool === "Figma" ? "text-white/80" : "text-white/40"
                }`}
              >
                Figma
              </span>
            </motion.div>

            {/* DaVinci Resolve - using actual image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onMouseEnter={() => setHoveredTool("DaVinci Resolve")}
              onMouseLeave={() => setHoveredTool(null)}
              className="group relative flex flex-col items-center"
            >
              <img
                src={davinciResolve.imageUrl}
                alt="DaVinci Resolve"
                className={`w-11 h-11 md:w-12 md:h-12 rounded-full object-cover transition-all duration-300 ${
                  hoveredTool === "DaVinci Resolve" ? "scale-110" : ""
                }`}
              />
              <span
                className={`mt-3 text-[10px] transition-colors duration-200 ${
                  hoveredTool === "DaVinci Resolve" ? "text-white/80" : "text-white/40"
                }`}
              >
                DaVinci Resolve
              </span>
            </motion.div>

            {/* Notion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onMouseEnter={() => setHoveredTool("Notion")}
              onMouseLeave={() => setHoveredTool(null)}
              className="group relative flex flex-col items-center"
            >
              <div
                className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 ${
                  hoveredTool === "Notion" ? "scale-110" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: svgTools[1].svg }}
              />
              <span
                className={`mt-3 text-[10px] transition-colors duration-200 ${
                  hoveredTool === "Notion" ? "text-white/80" : "text-white/40"
                }`}
              >
                Notion
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Capability Snapshot - Compact services section
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { motion } from "framer-motion";
import { Megaphone, Palette, Camera, Music } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Marketing & Strategy",
    items: ["Brand Strategy", "Digital Marketing", "Campaign Planning", "Content Strategy"],
  },
  {
    icon: Palette,
    title: "Design & Digital",
    items: ["Brand Identity", "Logo Design", "UI/UX Design", "Motion Graphics"],
  },
  {
    icon: Camera,
    title: "Media Production",
    items: ["Photography", "Video Production", "Brand Films", "Event Coverage"],
  },
  {
    icon: Music,
    title: "Music & Audio",
    items: ["Music Production", "Podcast Production", "Voice Overs", "Sound Design"],
  },
];

export default function CapabilitySnapshot() {
  return (
    <section id="services" className="py-16 md:py-20 bg-black relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light text-white">
            Our <span className="font-serif italic text-[#9B7B9B]">Services</span>
          </h2>
        </motion.div>

        {/* Compact 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 h-full hover:border-[#9B7B9B]/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#9B7B9B]/10 flex items-center justify-center mb-4 group-hover:bg-[#9B7B9B] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#9B7B9B] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white mb-3">{service.title}</h3>

                  {/* Items */}
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 rounded-full bg-[#9B7B9B]/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

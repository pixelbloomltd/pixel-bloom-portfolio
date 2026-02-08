/**
 * AboutSection Component - Conversion-focused About Us section
 * Content from pixelbloomltd.com/about
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            We Don't Follow{" "}
            <span className="font-serif italic text-[#9B7B9B]">The Playbook</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We're a Ghanaian creative agency that thinks differently. We don't chase trends—we set them. 
            We don't follow formulas—we create frameworks.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9B7B9B]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-10 h-full hover:border-[#9B7B9B]/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#9B7B9B]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#9B7B9B]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                To empower brands to tell stories that matter—stories that break through the noise, 
                create emotional connections, and drive real business impact.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                We exist to prove that African creativity can compete—and win—on the global stage, 
                while staying rooted in the authenticity and richness of our local culture.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9B7B9B]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-10 h-full hover:border-[#9B7B9B]/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#9B7B9B]/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#9B7B9B]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                To become Africa's most innovative storytelling agency—recognized not just for beautiful work, 
                but for work that transforms businesses and shapes culture.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                We envision a future where Ghanaian creativity is synonymous with excellence, 
                where our frameworks become industry standards, and where every brand we touch blooms into its fullest potential.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us - Conversion focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#9B7B9B]/10 via-[#9B7B9B]/5 to-transparent border border-[#9B7B9B]/20 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#9B7B9B]" />
                <span className="text-[#9B7B9B] font-medium">Why Work With Us</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                Stories that <span className="font-serif italic text-[#9B7B9B]">move people</span> to action
              </h3>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                Every successful brand shares one advantage: clarity of story. Not louder marketing. 
                Not more content. Clear, intentional messaging that aligns perception, emotion, and identity.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B7B9B] hover:bg-[#8B6B8B] text-white font-medium rounded-full transition-colors duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

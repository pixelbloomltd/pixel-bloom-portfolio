/**
 * BLOOM Framework Section - Clean horizontal timeline design
 * B - Break the Pattern
 * L - Locate the Pain
 * O - Offer Reframing
 * O - Optimize Identity
 * M - Move to Action
 * Brand colors: Black, Mauve (#9B7B9B), White, Grey
 */

import { motion } from "framer-motion";

const bloomSteps = [
  {
    letter: "B",
    title: "Break the Pattern",
    subtitle: "Interrupt attention",
    description: "Disrupt familiar narratives and challenge assumptions.",
  },
  {
    letter: "L",
    title: "Locate the Pain",
    subtitle: "Create emotional recognition",
    description: "Uncover the deeper tension your audience already feels.",
  },
  {
    letter: "O",
    title: "Offer Reframing",
    subtitle: "Shift belief, elevate value",
    description: "Reposition by shifting how the problem is understood.",
  },
  {
    letter: "O",
    title: "Optimize Identity",
    subtitle: "Show transformation",
    description: "Align with the identity your audience aspires to.",
  },
  {
    letter: "M",
    title: "Move to Action",
    subtitle: "Convert clarity into commitment",
    description: "Guide commitment through clarity, not pressure.",
  },
];

export default function BloomFramework() {
  return (
    <section id="framework" className="py-16 md:py-20 bg-zinc-950 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#9B7B9B] text-sm font-medium tracking-widest uppercase">
            Our Method
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light text-white">
            The <span className="font-serif italic text-[#9B7B9B]">BLOOM</span> Framework™
          </h2>
          <p className="mt-3 text-white/60 text-sm max-w-xl mx-auto">
            Our proprietary storytelling system. Turning attention into belief—and belief into action.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9B7B9B]/30 to-transparent" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {bloomSteps.map((step, index) => (
                <motion.div
                  key={step.letter + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Letter Circle */}
                  <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#9B7B9B] to-[#7B5B7B] flex items-center justify-center shadow-lg shadow-[#9B7B9B]/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white">{step.letter}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-[#9B7B9B] mb-2">{step.subtitle}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Cards */}
        <div className="lg:hidden space-y-3">
          {bloomSteps.map((step, index) => (
            <motion.div
              key={step.letter + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-zinc-900/50 border border-white/5 rounded-xl p-4"
            >
              {/* Letter */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9B7B9B] to-[#7B5B7B] flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">{step.letter}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="text-xs text-white/50">{step.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-white/60">
            <span className="text-[#9B7B9B]">Attention</span> → <span className="text-[#9B7B9B]">Belief</span> → <span className="text-[#9B7B9B]">Identity</span> → <span className="text-[#9B7B9B]">Action</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

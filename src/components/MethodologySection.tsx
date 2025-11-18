import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function MethodologySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      phase: "Phase 01",
      title: "Discovery",
      titleJa: "発見",
      description: "We begin by deeply understanding your vision, site context, and cultural aspirations through collaborative dialogue.",
    },
    {
      phase: "Phase 02",
      title: "Concept",
      titleJa: "概念",
      description: "Initial design concepts emerge, exploring spatial relationships and material palettes that honor both tradition and innovation.",
    },
    {
      phase: "Phase 03",
      title: "Development",
      titleJa: "開発",
      description: "Refined designs take shape with detailed drawings, 3D visualizations, and careful consideration of sustainable practices.",
    },
    {
      phase: "Phase 04",
      title: "Realization",
      titleJa: "実現",
      description: "Construction oversight ensures faithful execution of the design vision with meticulous attention to craftsmanship.",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-8 mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a86a] origin-right"
            />
            <h2 className="text-sm tracking-[0.3em] opacity-60">OUR PROCESS</h2>
          </div>
          <p className="text-4xl font-serif tracking-wide">設計の道</p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="relative"
            >
              <div className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 flex-shrink-0 border-2 border-[#c9a86a] rounded-full flex items-center justify-center"
                >
                  <span className="text-sm tracking-wider opacity-60">{step.phase}</span>
                </motion.div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-2xl mb-2 tracking-wider">{step.title}</h3>
                  <p className="text-3xl font-serif mb-4 text-[#c9a86a]">{step.titleJa}</p>
                  <p className="text-sm leading-relaxed opacity-70 max-w-md">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`absolute ${index % 2 === 0 ? 'left-16' : 'right-16'} top-32 w-px h-24 bg-gradient-to-b from-[#c9a86a] to-transparent origin-top`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

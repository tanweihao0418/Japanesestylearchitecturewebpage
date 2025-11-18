import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      number: "01",
      title: "Architectural Design",
      titleJa: "建築設計",
      description: "Comprehensive design solutions from concept to completion, blending traditional aesthetics with modern innovation.",
    },
    {
      number: "02",
      title: "Interior Design",
      titleJa: "インテリアデザイン",
      description: "Thoughtfully crafted interior spaces that emphasize natural materials, light, and harmonious living.",
    },
    {
      number: "03",
      title: "Urban Planning",
      titleJa: "都市計画",
      description: "Strategic development of sustainable communities that respect cultural heritage and environmental context.",
    },
    {
      number: "04",
      title: "Renovation & Restoration",
      titleJa: "改修・修復",
      description: "Sensitive modernization of existing structures while preserving their historical and cultural significance.",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-16 bg-[#f5f4f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-px w-24 bg-[#c9a86a] mx-auto mb-8"
          />
          <h2 className="text-sm tracking-[0.3em] opacity-60 mb-4">OUR SERVICES</h2>
          <p className="text-3xl font-serif tracking-wide">サービス</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -8 }}
              className="group bg-[#faf9f6] p-8 border border-[#c9a86a]/10 hover:border-[#c9a86a]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="text-5xl font-serif text-[#c9a86a]/20 group-hover:text-[#c9a86a]/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.number}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 tracking-wider">{service.title}</h3>
                  <p className="text-2xl font-serif mb-4 opacity-60">{service.titleJa}</p>
                  <p className="text-sm leading-relaxed opacity-70">{service.description}</p>
                </div>
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                className="h-px bg-gradient-to-r from-[#c9a86a] to-transparent mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity: 0.05
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-serif pointer-events-none"
      >
        美
      </motion.div>
    </section>
  );
}

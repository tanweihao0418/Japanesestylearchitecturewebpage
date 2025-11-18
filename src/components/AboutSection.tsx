import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrollHighlightWords } from "./ScrollHighlightText";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 px-16 relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          style={{ y }}
          className="space-y-12"
        >
          <div className="flex items-center gap-8 mb-16">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a86a] origin-left"
            />
            <h2 className="text-sm tracking-[0.3em] opacity-60">OUR PHILOSOPHY</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a86a] origin-right"
            />
          </div>

          <div className="text-2xl md:text-3xl leading-relaxed font-serif tracking-wide">
            <ScrollHighlightWords text="We believe architecture is the art of creating harmony between space, light, and human experience. Our designs honor the Japanese principle of Ma—the beauty of negative space—while embracing contemporary innovation and sustainable practices." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-12 pt-12"
          >
            {[
              { number: "25+", label: "Projects Completed" },
              { number: "12", label: "Awards Received" },
              { number: "8", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-serif text-[#c9a86a] mb-2">{stat.number}</div>
                <div className="text-xs tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background decorative element */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 border border-[#c9a86a]/10 rounded-full -z-10"
      />
    </section>
  );
}

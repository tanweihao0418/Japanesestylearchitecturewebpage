import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Parallax for background image
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1604245462979-e10d27052b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzYzMzk0NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Japanese Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-[#faf9f6]/80 to-[#faf9f6]" />
      </motion.div>

      {/* Floating Decorative Images */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute left-[10%] top-[20%] w-48 h-64 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729176990188-b11bdb3d902a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNzYzNDQ3MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Architectural Detail"
          className="w-full h-full object-cover shadow-2xl border border-[#c9a86a]/20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f6]/60 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute right-[8%] top-[30%] w-56 h-72 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646200436473-53829a7cec37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGludGVyaW9yJTIwbGlnaHR8ZW58MXx8fHwxNzYzNDQ3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Interior Light"
          className="w-full h-full object-cover shadow-2xl border border-[#c9a86a]/20"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#faf9f6]/60 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute left-[15%] bottom-[15%] w-40 h-56 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760237655540-8197ef24838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwd29vZHxlbnwxfHx8fDE3NjM0NDcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wood Detail"
          className="w-full h-full object-cover shadow-2xl border border-[#c9a86a]/20"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#faf9f6]/60 to-transparent" />
      </motion.div>

      {/* Decorative Golden Accent Bars */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute top-[15%] left-[5%] w-24 h-px bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent origin-left"
      />
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 1.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-[20%] right-[5%] w-32 h-px bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent origin-right"
      />

      <motion.div
        style={{ opacity, scale, y }}
        className="text-center px-8 max-w-5xl relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 font-serif tracking-[0.15em]"
        >
          建築設計
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl tracking-widest opacity-60 mb-4"
        >
          ARCHITECTURE & DESIGN
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base tracking-wider opacity-40 max-w-2xl mx-auto"
        >
          Crafting timeless spaces that blend traditional Japanese aesthetics with contemporary innovation
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent mx-auto mt-12 origin-center"
        />
      </motion.div>

      <motion.div
        style={{ opacity: scrollYProgress }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs tracking-widest opacity-40"
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
}
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  year: string;
  image: string;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ title, year, image, index, onClick }: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const smoothY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const smoothScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{ y: smoothY, scale: smoothScale }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 rounded-sm">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          whileHover={{ scale: 1.05 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />
        
        {/* Decorative corner accent */}
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#c9a86a] origin-top-right"
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div 
        className="mt-6 space-y-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
      >
        <h3 className="text-base tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity group-hover:text-[#c9a86a] transition-colors">
          {title}
        </h3>
        <p className="text-sm opacity-60 tracking-wider">{year}</p>
      </motion.div>
    </motion.div>
  );
}
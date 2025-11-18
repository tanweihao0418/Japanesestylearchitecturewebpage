import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      onAnimationComplete={(definition: any) => {
        if (definition.opacity === 0) {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[100] bg-[#faf9f6] flex items-center justify-center"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.05,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="absolute w-px h-full bg-[#c9a86a]"
            style={{
              left: `${(i + 1) * 5}%`,
            }}
          />
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center">
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              ease: [0.21, 0.47, 0.32, 0.98],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block"
          >
            <h1 className="text-6xl md:text-8xl font-serif tracking-[0.3em] text-[#2c2c2c]">
              KAD
            </h1>
          </motion.div>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-px bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent mt-8 mx-auto w-64"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs md:text-sm tracking-[0.5em] text-[#2c2c2c] opacity-60 uppercase mb-16"
        >
          Architecture & Design
        </motion.p>

        {/* Animated Dots Loader */}
        <div className="flex items-center justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[#c9a86a]"
            />
          ))}
        </div>

        {/* Japanese Inspired Circle Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-[#c9a86a] -z-10"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#c9a86a] -z-10"
        />
      </div>

      {/* Corner Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-[#c9a86a]/30"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-[#c9a86a]/30"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 w-16 h-16 md:w-24 md:h-24 border-b-2 border-l-2 border-[#c9a86a]/30"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 border-[#c9a86a]/30"
      />
    </motion.div>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect } from "react";

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    year: string;
    image: string;
    category?: string;
    location?: string;
    size?: string;
    client?: string;
    description?: string;
    credits?: string;
  };
}

export function ProjectDetail({ isOpen, onClose, project }: ProjectDetailProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#2c2c2c]/95 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8 md:px-8 md:py-16">
              <div className="max-w-7xl mx-auto bg-[#faf9f6] relative">
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#2c2c2c] text-[#faf9f6] rounded-full flex items-center justify-center hover:bg-[#c9a86a] transition-colors"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[50vh] md:h-[70vh] overflow-hidden"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 to-transparent" />
                  
                  {/* Title Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-[#faf9f6]"
                  >
                    <h2 className="text-2xl md:text-5xl font-serif tracking-wide mb-1 md:mb-2">{project.title}</h2>
                    <p className="text-sm md:text-xl tracking-widest opacity-60">{project.year}</p>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 md:p-12">
                  {/* Left Sidebar - Project Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-3 space-y-6 md:space-y-8"
                  >
                    <div>
                      <h3 className="text-xs tracking-widest opacity-40 mb-3">CATEGORY</h3>
                      <p className="tracking-wider">{project.category || "Architecture"}</p>
                    </div>
                    
                    <div className="h-px bg-[#c9a86a]/20" />
                    
                    <div>
                      <h3 className="text-xs tracking-widest opacity-40 mb-3">LOCATION</h3>
                      <p className="tracking-wider">{project.location || "Tokyo, Japan"}</p>
                    </div>
                    
                    <div className="h-px bg-[#c9a86a]/20" />
                    
                    <div>
                      <h3 className="text-xs tracking-widest opacity-40 mb-3">SIZE</h3>
                      <p className="tracking-wider">{project.size || "350 m²"}</p>
                    </div>
                    
                    <div className="h-px bg-[#c9a86a]/20" />
                    
                    <div>
                      <h3 className="text-xs tracking-widest opacity-40 mb-3">CLIENT</h3>
                      <p className="tracking-wider">{project.client || "Private"}</p>
                    </div>
                    
                    <div className="h-px bg-[#c9a86a]/20" />
                    
                    <div>
                      <h3 className="text-xs tracking-widest opacity-40 mb-3">YEAR</h3>
                      <p className="tracking-wider">{project.year}</p>
                    </div>
                  </motion.div>

                  {/* Right Content - Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="md:col-span-9 space-y-8"
                  >
                    <div>
                      <h3 className="text-sm tracking-[0.3em] opacity-60 mb-6">PROJECT OVERVIEW</h3>
                      <p className="text-base leading-relaxed opacity-80 mb-6">
                        {project.description || `This project embodies our philosophy of creating spaces that harmonize traditional Japanese architectural principles with contemporary design sensibilities. The design carefully considers the relationship between interior and exterior, utilizing natural materials and light to create a serene, contemplative atmosphere.`}
                      </p>
                      <p className="text-base leading-relaxed opacity-80">
                        {`Every detail has been meticulously crafted to ensure a seamless integration with the surrounding environment. The use of local materials and traditional construction techniques pays homage to Japanese heritage while embracing modern innovation and sustainability.`}
                      </p>
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-px bg-gradient-to-r from-[#c9a86a] via-[#c9a86a]/50 to-transparent origin-left"
                    />

                    <div>
                      <h3 className="text-sm tracking-[0.3em] opacity-60 mb-6">DESIGN CONCEPT</h3>
                      <p className="text-base leading-relaxed opacity-80">
                        {`The conceptual framework draws inspiration from the Japanese principle of 'Ma' (間) - the beauty of negative space and the intervals between elements. This approach creates a dialogue between solid and void, light and shadow, creating spaces that breathe and evolve throughout the day.`}
                      </p>
                    </div>

                    {project.credits && (
                      <>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 0.9 }}
                          className="h-px bg-gradient-to-r from-[#c9a86a] via-[#c9a86a]/50 to-transparent origin-left"
                        />
                        
                        <div>
                          <h3 className="text-sm tracking-[0.3em] opacity-60 mb-6">CREDITS</h3>
                          <p className="text-sm leading-relaxed opacity-60">{project.credits}</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="px-12 pb-12"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent" />
                  <div className="text-center mt-8">
                    <p className="text-xs tracking-widest opacity-40">KAD ARCHITECTURE & DESIGN</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
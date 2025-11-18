import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface SlideOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SlideOutMenu({ isOpen, onClose }: SlideOutMenuProps) {
  const menuItems = ["About", "Team", "Contact", "Journal", "Instagram"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              duration: 0.5, 
              ease: [0.32, 0.72, 0, 1]
            }}
            className="fixed right-0 top-0 h-full w-80 bg-[#faf9f6] z-50 shadow-2xl border-l border-[#c9a86a]/20"
          >
            <div className="p-12">
              <div className="flex justify-between items-start mb-16">
                <motion.div 
                  className="text-5xl font-serif"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  A.
                </motion.div>
                <motion.button
                  onClick={onClose}
                  className="hover:opacity-60 transition-opacity text-[#2c2c2c]"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} strokeWidth={1.5} />
                </motion.button>
              </div>
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ 
                      delay: index * 0.08 + 0.2,
                      duration: 0.4,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                  >
                    <motion.a
                      href="#"
                      className="block text-base tracking-widest hover:text-[#c9a86a] transition-colors"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {item}
                    </motion.a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
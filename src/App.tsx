import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SlideOutMenu } from "./components/SlideOutMenu";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorFollower } from "./components/CursorFollower";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { MethodologySection } from "./components/MethodologySection";
import { AwardsSection } from "./components/AwardsSection";
import { ContactFooter } from "./components/ContactFooter";
import { ProjectDetail } from "./components/ProjectDetail";
import { LoadingScreen } from "./components/LoadingScreen";
import providedImage from "figma:asset/29c045de317b501523ea1697ae8b70f0d0a35961.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Architecture");
  const [showNav, setShowNav] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 500], [0, 150]);
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Show navigation after scrolling past hero and hide before other sections
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const projectsSection = document.querySelector('#projects-section');
      
      if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();
        const projectsBottom = projectsRect.bottom;
        
        // Show nav when past hero, hide when past projects section
        const shouldShow = window.scrollY > heroHeight * 0.5 && projectsBottom > 200;
        setShowNav(shouldShow);
      } else {
        setShowNav(window.scrollY > heroHeight * 0.5);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["Architecture", "Interior", "Product", "Direction"];

  const projects = [
    {
      title: "TRUNK(HOTEL) YOYOGI PARK",
      year: "2023",
      image: providedImage,
    },
    {
      title: "House in Aoyama",
      year: "2023",
      image: "https://images.unsplash.com/photo-1752658918430-e3ff8a92c4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBqYXBhbnxlbnwxfHx8fDE3NjMzOTI1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Kamakura Residence",
      year: "2024",
      image: "https://images.unsplash.com/photo-1763312196860-0d889fde89e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBqYXBhbmVzZSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzM5MjUyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Zen Garden House",
      year: "2024",
      image: "https://images.unsplash.com/photo-1674880944347-1c5b2547e3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBnYXJkZW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNjMzNTA5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Contemporary Tower",
      year: "2022",
      image: "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMzNTg0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Shibuya Cultural Center",
      year: "2023",
      image: providedImage,
    },
    {
      title: "Traditional Machiya Renewal",
      year: "2024",
      image: "https://images.unsplash.com/photo-1672527213414-6cf9cffe878c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFyY2hpdGVjdHVyZSUyMHdvb2RlbnxlbnwxfHx8fDE3NjM0NDYwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Minimalist Retreat",
      year: "2022",
      image: "https://images.unsplash.com/photo-1621871305416-1ac9dff14616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBqYXBhbmVzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzM4ODg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Concrete Sanctuary",
      year: "2023",
      image: "https://images.unsplash.com/photo-1744148621897-5fb0b6323543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzNDQ2MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Garden Pavilion",
      year: "2024",
      image: "https://images.unsplash.com/photo-1759299983676-c9bb1a3ab238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGdhcmRlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjM0NDYwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Urban Oasis",
      year: "2023",
      image: "https://images.unsplash.com/photo-1763312196860-0d889fde89e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBqYXBhbmVzZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzQ0NjAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Meditation Space",
      year: "2022",
      image: "https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBhcmNoaXRlY3R1cmUlMjBzcGFjZXxlbnwxfHx8fDE3NjM0NDYwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setShowContent(true)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {showContent && (
        <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] overflow-x-hidden">
          <ScrollProgress />
          <CursorFollower />

          {/* Hero Section */}
          <HeroSection />

          {/* Header with Vertical Logo - Hidden on mobile */}
          <motion.div 
            className="hidden lg:flex fixed left-0 top-0 h-full w-24 items-start justify-center pt-12 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: showNav ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{ y: logoY, opacity: logoOpacity }}
              className="writing-mode-vertical text-2xl tracking-[0.5em] select-none font-serif"
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                KAD
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation - Hidden on mobile, use horizontal tabs instead */}
          <motion.nav 
            className="hidden lg:flex fixed left-24 top-0 h-full items-start pt-48 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: showNav ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="space-y-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showNav ? 1 : 0, x: showNav ? 0 : -20 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block text-sm tracking-widest transition-all duration-300 relative ${
                    activeCategory === category
                      ? "opacity-100 text-[#c9a86a]"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute -left-4 top-1/2 w-2 h-2 bg-[#c9a86a] rounded-full"
                      style={{ y: "-50%" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.nav>

          {/* Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
            onClick={() => setMenuOpen(true)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-8 top-8 z-30 transition-opacity text-[#2c2c2c]"
          >
            <Menu size={32} strokeWidth={1.5} />
          </motion.button>

          {/* About Section */}
          <AboutSection />

          {/* Mobile Category Navigation - Horizontal tabs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden sticky top-0 z-20 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#c9a86a]/10 px-4 py-4 overflow-x-auto"
          >
            <div className="flex gap-4 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 text-xs tracking-widest transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-[#c9a86a] text-[#faf9f6]"
                      : "bg-transparent text-[#2c2c2c] opacity-50 hover:opacity-80"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Section Header */}
          <div className="px-4 lg:pl-64 lg:pr-16 py-12" id="projects-section">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-8 mb-8"
            >
              <h2 className="text-sm tracking-[0.3em] opacity-60">SELECTED WORKS</h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-px flex-1 bg-gradient-to-r from-[#c9a86a] to-transparent origin-left"
              />
            </motion.div>
          </div>

          {/* Main Content */}
          <main className="px-4 lg:pl-64 lg:pr-16 pb-16 lg:pb-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-32 max-w-7xl"
              >
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={`${activeCategory}-${index}`} 
                    {...project} 
                    index={index}
                    onClick={() => setSelectedProject(index)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Project Detail Modal */}
          {selectedProject !== null && (
            <ProjectDetail
              isOpen={selectedProject !== null}
              onClose={() => setSelectedProject(null)}
              project={projects[selectedProject]}
            />
          )}

          {/* Slide Out Menu */}
          <SlideOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          {/* Decorative Elements */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8, 
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="fixed right-0 top-0 w-px h-screen bg-gradient-to-b from-transparent via-[#c9a86a]/40 to-transparent origin-top"
            style={{ right: "calc(2rem + 14px)" }}
          />

          <div className="fixed left-24 bottom-0 w-px h-64 bg-gradient-to-t from-transparent to-[#c9a86a]/20" />

          {/* Services Section */}
          <ServicesSection />

          {/* Methodology Section */}
          <MethodologySection />

          {/* Awards Section */}
          <AwardsSection />

          {/* Contact Footer */}
          <ContactFooter />
        </div>
      )}
    </>
  );
}
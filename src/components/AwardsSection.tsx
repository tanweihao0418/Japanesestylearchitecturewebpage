import { motion } from "motion/react";

export function AwardsSection() {
  const awards = [
    {
      year: "2024",
      title: "Good Design Award",
      project: "Kamakura Residence",
      organization: "Japan Institute of Design Promotion",
    },
    {
      year: "2023",
      title: "Architecture MasterPrize",
      project: "Zen Garden House",
      organization: "International Architecture Awards",
    },
    {
      year: "2023",
      title: "JIA New Face Award",
      project: "House in Aoyama",
      organization: "Japan Institute of Architects",
    },
    {
      year: "2022",
      title: "World Architecture Festival",
      project: "Contemporary Tower",
      organization: "WAF Awards",
    },
    {
      year: "2022",
      title: "Asia Pacific Property Award",
      project: "Shibuya Cultural Center",
      organization: "International Property Awards",
    },
  ];

  return (
    <section className="py-32 px-16 bg-[#2c2c2c] text-[#faf9f6]">
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
          <h2 className="text-sm tracking-[0.3em] opacity-60 mb-4">RECOGNITION</h2>
          <p className="text-3xl font-serif tracking-wide">受賞歴</p>
        </motion.div>

        <div className="space-y-1">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ x: 10, backgroundColor: "rgba(201, 168, 106, 0.05)" }}
              className="grid grid-cols-12 gap-8 py-6 border-b border-[#faf9f6]/10 cursor-pointer group"
            >
              <div className="col-span-1 text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                {award.year}
              </div>
              <div className="col-span-4 tracking-wider group-hover:text-[#c9a86a] transition-colors">
                {award.title}
              </div>
              <div className="col-span-4 text-sm opacity-60">
                {award.project}
              </div>
              <div className="col-span-3 text-sm opacity-40 text-right">
                {award.organization}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-sm opacity-40 tracking-widest">AND MANY MORE</p>
        </motion.div>
      </div>
    </section>
  );
}

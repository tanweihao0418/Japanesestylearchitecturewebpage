import { motion } from "motion/react";

export function ContactFooter() {
  return (
    <footer className="bg-[#faf9f6] border-t border-[#c9a86a]/20">
      {/* Contact Section */}
      <section className="py-32 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm tracking-[0.3em] opacity-60 mb-8">GET IN TOUCH</h2>
              <p className="text-5xl font-serif tracking-wide mb-12">
                お問い合わせ
              </p>
              <p className="text-base leading-relaxed opacity-70 mb-12 max-w-md">
                We welcome the opportunity to discuss your architectural vision. 
                Let's create something extraordinary together.
              </p>
              
              <motion.a
                href="mailto:info@kad-architecture.com"
                whileHover={{ x: 10 }}
                className="inline-block text-xl tracking-wider text-[#c9a86a] hover:opacity-70 transition-opacity"
              >
                info@kad-architecture.com
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-xs tracking-widest opacity-40 mb-4">TOKYO OFFICE</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  3-12-8 Minami-Aoyama<br />
                  Minato-ku, Tokyo 107-0062<br />
                  Japan
                </p>
              </div>

              <div>
                <h3 className="text-xs tracking-widest opacity-40 mb-4">KYOTO STUDIO</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  256 Kiyamachi-dori<br />
                  Nakagyo-ku, Kyoto 604-8042<br />
                  Japan
                </p>
              </div>

              <div>
                <h3 className="text-xs tracking-widest opacity-40 mb-4">CONTACT</h3>
                <p className="text-sm leading-relaxed opacity-70">
                  T: +81 3 1234 5678<br />
                  F: +81 3 1234 5679
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-[#c9a86a]/10 py-8 px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-12"
          >
            <p className="text-2xl font-serif tracking-wide">KAD</p>
            <p className="text-xs opacity-40">Architecture & Design</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            {["Instagram", "LinkedIn", "Pinterest"].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -2 }}
                className="text-xs tracking-wider opacity-40 hover:opacity-100 transition-opacity"
              >
                {social}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs opacity-40"
          >
            © 2024 KAD Architecture. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

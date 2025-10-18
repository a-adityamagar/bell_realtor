import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
// Custom X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61577929755138' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/getbotel' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/gobellhop/' },
    { name: 'X', icon: XIcon, url: 'https://x.com/bellhopexpress' }
  ];

  return (
    <footer className="bg-white text-[#1A3551] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-8"
          >
            {socialLinks.map((social, index) => (
              <React.Fragment key={social.name}>
                <motion.a
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#1A3551] hover:text-[#FF7A6B] transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                {index < socialLinks.length - 1 && (
                  <span className="text-[#1A3551]">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-sm sm:text-base text-[#1A3551]"
          >
            <p>2025 © Copyright BOTEL. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
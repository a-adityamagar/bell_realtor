import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on click
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = ['Home', 'How It Works', 'Benefits', 'Calculator'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer z-50"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => smoothScroll(e as any, '#home')}
            >
              <span className="text-3xl font-bold text-[#FF7A6B]">
                BOTEL
              </span>
              <span className="text-sm text-[#1A3551] hidden sm:block font-light tracking-wider">
                For Realtors
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => smoothScroll(e, `#${item.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="text-[#1A3551] hover:text-[#1A3551]/80 transition-colors duration-200 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                onClick={(e) => smoothScroll(e, '#cta-section')}
                className="bg-[#FF7A6B] text-white hover:bg-[#FF7A6B]/90 px-6 py-2.5 rounded-full
                  font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#1A3551] p-2 z-50 relative"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => smoothScroll(e, `#${item.toLowerCase().replace(/\s+/g, '-')}`)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-[#1A3551] hover:text-[#FF7A6B] text-xl font-medium py-4 
                      border-b border-gray-100 transition-colors duration-200"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Join Now Button at Bottom */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => smoothScroll(e, '#cta-section')}
                className="w-full bg-[#FF7A6B] text-white hover:bg-[#FF7A6B]/90 py-4 rounded-full
                  font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Join Now
              </motion.button>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-6 text-sm text-[#1A3551]/60"
              >
                Start earning with Botel today
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
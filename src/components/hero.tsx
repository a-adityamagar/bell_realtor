import { motion } from 'framer-motion';
import Image from '../assets/botelWithMoney.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-8 bg-gradient-to-b from-white/40 to-white/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto space-y-3 sm:space-y-4 lg:space-y-5"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3551] leading-tight">
              Become a Botel Partner.
              <span className="block text-[#FF7A6B] mt-1">
                Start Earning on Every Referral
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#1A3551]/80 max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              Help your clients and followers save while you earn commission every time a Botel is purchased using your unique code.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 w-full">
              {[
                { value: '15%', label: 'Commission' },
                { value: '$225', label: 'Avg Sale' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="p-2 sm:p-3 md:p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-base sm:text-lg md:text-xl font-bold text-[#FF7A6B]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#1A3551]/70 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image (after stats, before buttons on small screens) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center my-3 sm:my-4 lg:hidden"
            >
              <img
                src={Image}
                alt="Botel Affiliate Program"
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3 w-full justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base 
                  bg-[#FF7A6B] text-white rounded-full font-semibold shadow-md hover:shadow-lg
                  hover:bg-[#FF7A6B]/90 transition-all duration-300"
              >
                Get Affiliate Code
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base 
                  bg-white text-[#1A3551] rounded-full font-semibold border border-[#1A3551]/20
                  hover:border-[#1A3551]/40 hover:shadow-md transition-all duration-300"
              >
                See How It Works
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content (desktop image) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={Image}
              alt="Botel Affiliate Program"
              className="w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
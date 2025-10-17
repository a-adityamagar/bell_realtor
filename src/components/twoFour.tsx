import { motion } from 'framer-motion';
import { useState } from 'react';
import boxes from '../assets/boxes.png';
import luggage from '../assets/luggage.png';
import luggagebox from '../assets/luggagebox.png';

export default function TwoFour() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      label: 'Traveler Mode',
      title: "Secure luggage storage",
      subtitle: "($10-$50 per stay, insurance included).",
      color: "bg-white",
      titleColor: "text-[#1A3551]",
      image: luggage
    },
    {
      label: 'Package Hub Mode',
      title: "Package Hub Mode",
      subtitle: "Residents pay $20/month.",
      color: "bg-white",
      titleColor: "text-[#1A3551]",
      image:boxes
    },
    {
      label: 'Hybrid Mode',
      title: "Hybrid Mode",
      subtitle: "Traveler storage when booked, package hub when idle.",
      color: "bg-white",
      titleColor: "text-[#1A3551]",
      image: luggagebox
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF7A6B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#1A3551]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF7A6B]">
            Earn 24/7
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3551]">
            Travelers, Packages, or Both
          </h3>
          <p className="text-base sm:text-lg text-[#1A3551]/70 max-w-3xl mx-auto leading-relaxed">
            Your Botel never sleeps. Both compartments run independently, giving you two daily earning streams:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 overflow-hidden cursor-pointer 
                min-h-[320px] flex flex-col ${hoveredCard === index ? 'shadow-2xl -translate-y-1' : ''}`}
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,122,107,0.04) 100%)' }}
            >
              {/* Label - moves up and fades out on hover */}
              <motion.div
                animate={
                  hoveredCard === index
                    ? { y: -30, opacity: 0 }
                    : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="px-3 py-1 rounded-full bg-white text-[#FF7A6B] border border-[#FF7A6B] text-xs font-medium whitespace-nowrap">
                  {card.label}
                </div>
              </motion.div>

              {/* Image - slides up from bottom on hover */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={
                  hoveredCard === index
                    ? { y: 0, opacity: 0.25 }
                    : { y: 60, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-0 h-64 flex items-end justify-center pointer-events-none select-none z-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-[220px] object-contain"
                />
              </motion.div>

              {/* Content - moves up on hover */}
              <motion.div
                animate={
                  hoveredCard === index
                    ? { y: -20 }
                    : { y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex-1 flex flex-col justify-center items-start text-left"
              >
                <h4 className={`text-xl sm:text-2xl font-bold ${card.titleColor} mb-2`}>
                  {card.title}
                </h4>
                <p className="text-[#1A3551] text-sm sm:text-base font-medium max-w-[14rem]">
                  {card.subtitle}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-[#FF7A6B] text-white px-8 py-3 rounded-full font-semibold
            hover:bg-[#FF7A6B]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Start Earning Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
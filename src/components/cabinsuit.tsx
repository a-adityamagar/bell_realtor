import { motion } from 'framer-motion';
import { useState } from 'react';
import cabinsuit from '../assets/smallBotel.png';

export default function CabinSuite() {
  const [hoveredCard, setHoveredCard] = useState<'cabin' | 'suite' | null>(null);

  type CardId = 'cabin' | 'suite';
  type Card = {
    id: CardId;
    label: string;
    size: string;
    description: string;
    bgColor: string;
    image: string;
  };

  const cards: Card[] = [
    {
      id: 'cabin',
      label: 'Cabin',
      size: '1.5 x 3ft',
      description: 'Small bags, packages, short-stay stashes.',
      bgColor: 'from-red-50 to-orange-50',
      image: cabinsuit
    },
    {
      id: 'suite',
      label: 'Suite',
      size: '3ft x 3ft',
      description: 'Full luggage, event bags, long stays',
      bgColor: 'from-purple-50 to-pink-50',
      image: cabinsuit
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF7A6B]">
            Cabin + Suite
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A3551] mt-2">
            Double the Income Potential
          </h3>
          <p className="text-base sm:text-lg text-[#1A3551]/70 max-w-2xl mx-auto mt-3 leading-relaxed">
            With two earning spaces, your Botel adapts to any need – from a traveler stashing a 
            carry-on, to neighbors securing deliveries, to a courier dropping packages.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                scale: hoveredCard === card.id ? 1.03 : 1,
                boxShadow: hoveredCard === card.id 
                  ? '0 10px 25px rgba(0,0,0,0.1)' 
                  : '0 4px 10px rgba(0,0,0,0.05)'
              }}
              className={`bg-gradient-to-br ${card.bgColor} rounded-2xl p-6 sm:p-8 
                transition-all duration-300 cursor-pointer flex flex-col justify-between
                min-h-[400px]`}
            >
              {/* Header */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#1A3551] mb-1">
                  {card.label}
                </h4>
                <p className="text-4xl font-extrabold text-[#1A3551] mb-2">
                  {card.size}
                </p>
                <p className="text-sm text-[#1A3551]/70 font-medium">
                  {card.description}
                </p>
              </div>

              {/* Image */}
              <motion.div
                animate={{
                  scale: hoveredCard === card.id ? 1.05 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex items-center justify-center mt-6"
              >
                <div
                  className={`relative w-full max-w-[220px] sm:max-w-[250px]`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      card.id === 'cabin'
                        ? 'from-[#FF7A6B]/20 to-[#FF7A6B]/5'
                        : 'from-[#1A3551]/20 to-[#1A3551]/5'
                    } rounded-2xl blur-xl`}
                  />
                  <img
                    src={card.image}
                    alt={`${card.label} Botel`}
                    className="relative w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

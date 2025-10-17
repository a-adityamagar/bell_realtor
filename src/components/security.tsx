import { motion } from 'framer-motion';
import sheild from "../assets/trusted-shield.png";
import weather from "../assets/weather-proof.jpg";
import warranty from "../assets/12-warranty.png";
import adt from "../assets/adt.png";
import lock from "../assets/lock.png";

export default function Security() {
  const features = [
    {
      title: "24/7 ADT monitoring",
      subtitle: "(optional $19.99/month)",
      image: adt
    },
    {
      title: "WiFi lock + camera built in",
      subtitle: "",
      image: lock
    },
    {
      title: "12-month warranty",
      subtitle: "",
      image: warranty
    },
    {
      title: "Weatherproof + tamper-resistant",
      subtitle: "",
      image: weather
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Large shield — centered */}
          <div className="flex justify-center mb-6 -mt-8 sm:-mt-12 lg:-mt-16">
            <img
              src={sheild}
              alt="Trusted shield"
              className="w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3551] leading-tight max-w-4xl mx-auto">
            Trusted by ADT Security &<br className="hidden md:block" />
            Manufacturer Warranty
          </h2>

          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-[#1A3551]/70">
              Automatic $500 insurance (traveler storage) + included $500 coverage
            </p>
            <p className="text-base sm:text-lg text-[#1A3551]/70 mt-1">
              in household subscriptions.
            </p>
          </div>
        </motion.div>

        {/* 2x2 Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-2xl bg-white p-8 sm:p-10 lg:p-12 shadow-sm"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 30%, rgba(255,122,107,0.06) 0%, rgba(255,122,107,0.03) 30%, rgba(255,255,255,0.98) 70%)'
                }}
              >
                <div className="flex flex-col items-center text-center min-h-[260px]">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center">
                    <img src={feature.image} alt={feature.title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1A3551] mb-2">
                    {feature.title}
                  </h3>

                  {feature.subtitle ? (
                    <p className="text-sm text-[#1A3551]/60 max-w-xs">
                      {feature.subtitle}
                    </p>
                  ) : (
                    <div className="h-4" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

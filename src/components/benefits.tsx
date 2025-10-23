import { motion } from 'framer-motion';
import { TrendingUp, Shield, Wallet } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Returns with Accurate Monitoring",
      description: "Utilize advanced sensors to track your assets accurately, preventing misuse and underreporting. Ensure you receive the full value of your investment by monitoring real-time data on asset performance.",
      bgColor: "bg-[#1A3551]",
      textColor: "text-white"
    },
    {
      icon: Shield,
      title: "Secure and Transparent Transactions",
      description: "Our blockchain-based system guarantees tamper-proof, transparent transactions. Payments are easily made through our platform, providing a secure way to handle investment yields.",
      bgColor: "bg-[#1A3551]",
      textColor: "text-white"
    },
    {
      icon: Wallet,
      title: "Effortless Withdrawal and Access",
      description: "Enjoy the flexibility of withdrawing your funds at any time. Whether you prefer cryptocurrency or local currency, our platform supports easy, hassle-free access to your earnings.",
      bgColor: "bg-[#1A3551]",
      textColor: "text-white"
    }
  ];

  return (
    <section id = "benefits" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3551]">
            Why Choose Botel?
          </h2>
          <p className="text-base sm:text-lg text-[#1A3551]/70 max-w-3xl mx-auto leading-relaxed">
            Maximize your returns with Botel's advanced sensor technology. Enjoy real-time monitoring, 
            anti-tampering systems, and seamless payment processing, all from your dashboard.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${benefit.bgColor} ${benefit.textColor}  p-8 sm:p-10 
                shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
                flex flex-col h-full`}
            >
              {/* Icon */}
              <div className="mb-6">
                <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight text-[#82da99]">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Upload, Users, CreditCard, Share } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Register as Affiliate",
    description: "Sign up and complete your profile to join our affiliate program. It's quick and free to get started.",
    icon: <Upload className="w-8 h-8 text-[#82da99]" />,
  },
  {
    number: "2",
    title: "Get Your Code",
    description: "Receive your unique affiliate code that you can share with clients and your network.",
    icon: <CreditCard className="w-8 h-8 text-[#82da99]" />,
  },
  {
    number: "3",
    title: "Share & Earn",
    description: "Share your code with clients. They get discounts, you earn commission on every booking.",
    icon: <Share className="w-8 h-8 text-[#82da99]" />,
  },
  {
    number: "4",
    title: "Track Progress",
    description: "Monitor your earnings and bookings in real-time through your personalized dashboard.",
    icon: <Users className="w-8 h-8 text-[#82da99]" />,
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3551]">
            How It <span className="text-[#82da99]">Works</span>
          </h2>
          <p className="text-[#1A3551]/70 text-lg max-w-2xl mx-auto">
            Start earning passive income with Botel in four simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-sm font-medium text-[#82da99] mb-4">
                Step {step.number}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="p-3 bg-[#82da99]/10 rounded-lg inline-block">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A3551]">
                  {step.title}
                </h3>
                <p className="text-[#1A3551]/70">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last card) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-[#1a3551] text-white px-8 py-3 rounded-full font-medium 
            hover:bg-[#1a3551]/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Become an Affiliate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
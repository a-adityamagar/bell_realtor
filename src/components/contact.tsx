import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Phone, Instagram, MessageSquare, Send, CheckCircle, XCircle, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bf5b3ca6-c8f1-4f7d-8113-c4d84f6961f2",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setAlertType('success');
        setShowAlert(true);
        setFormData({ name: "", email: "", phone: "", instagram: "", message: "" });
      } else {
        setAlertType('error');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertType('error');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A3551]">
            Get Started with <span className="text-[#FF7A6B]">Botel</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1A3551]/70 max-w-2xl mx-auto">
            Join our affiliate program today and start earning. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12">
            <div className="space-y-6">
              {/* Two Column Grid for First 4 Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1A3551] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                        focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] 
                        transition-all outline-none text-[#1A3551]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1A3551] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                        focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] 
                        transition-all outline-none text-[#1A3551]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1A3551] mb-2">
                    Contact Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                        focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] 
                        transition-all outline-none text-[#1A3551]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Instagram Field */}
                <div>
                  <label htmlFor="instagram" className="block text-sm font-semibold text-[#1A3551] mb-2">
                    Instagram Username
                  </label>
                  <div className="relative">
                    <Instagram className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                        focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] 
                        transition-all outline-none text-[#1A3551]"
                      placeholder="@yourusername"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1A3551] mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-[#FF7A6B] w-5 h-5 pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                      focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] 
                      transition-all outline-none text-[#1A3551] resize-none"
                    placeholder="Tell us about your business and how you'd like to promote Botel..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white text-lg
                  flex items-center justify-center gap-2 transition-all duration-300
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#FF7A6B] hover:bg-[#FF7A6B]/90 shadow-lg hover:shadow-xl'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-[#1A3551]/60">
                By submitting this form, you agree to receive communications from Botel.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Alert Popup */}
      <AnimatePresence>
        {showAlert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAlert(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Alert Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowAlert(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {alertType === 'success' ? (
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <XCircle className="w-10 h-10 text-red-500" />
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#1A3551] mb-2">
                    {alertType === 'success' ? 'Success!' : 'Oops!'}
                  </h3>
                  <p className="text-[#1A3551]/70 mb-6">
                    {alertType === 'success' 
                      ? "Message sent successfully! We'll get back to you within 24 hours."
                      : "Failed to send message. Please try again or contact us directly."}
                  </p>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="bg-[#FF7A6B] text-white px-8 py-3 rounded-full font-semibold
                      hover:bg-[#FF7A6B]/90 transition-all duration-300 shadow-lg"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
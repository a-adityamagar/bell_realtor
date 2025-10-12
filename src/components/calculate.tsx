import { motion } from 'framer-motion';
import { useState } from 'react';
import { DollarSign, ShoppingCart, TrendingUp, Calendar, Users } from 'lucide-react';

export default function Calculator() {
  const [monthlySales, setMonthlySales] = useState(5);
  const [averagePrice, setAveragePrice] = useState(1499);
  const [discount] = useState(10); // Fixed 10% discount for clients
  const [commissionRate] = useState(15); // Fixed 15% commission for realtors
  const [viewMode, setViewMode] = useState('annual'); // 'monthly' or 'annual'

  const calculateEarnings = () => {
    const discountAmount = averagePrice * (discount / 100);
    const priceAfterDiscount = averagePrice - discountAmount;
    const monthlyDiscountedTotal = monthlySales * priceAfterDiscount;
    const monthlyEarnings = monthlyDiscountedTotal * (commissionRate / 100);
    const annualEarnings = monthlyEarnings * 12;
    const totalClientSavings = discountAmount * monthlySales;

    return {
      monthlyEarnings,
      annualEarnings,
      priceAfterDiscount,
      totalClientSavings,
      originalPrice: averagePrice,
      savingsPerBooking: discountAmount
    };
  };

  const {
    monthlyEarnings,
    annualEarnings,
    priceAfterDiscount,
    totalClientSavings,
    originalPrice,
  } = calculateEarnings();

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3551]">
            Calculate Your <span className="text-[#FF7A6B]">Potential Earnings</span>
          </h2>
          <p className="text-[#1A3551]/70 text-lg max-w-2xl mx-auto">
            See how much you and your clients can benefit from our affiliate program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2"
        >
          {/* Left Section: Inputs */}
          <div className="p-8 md:p-10 bg-white">
            <h3 className="text-xl font-semibold text-[#1A3551] mb-6">
              Enter Your Details
            </h3>

            {/* Monthly Sales Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1A3551] mb-2">
                Expected Monthly Sales
              </label>
              <div className="relative">
                <ShoppingCart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5" />
                <input
                  type="number"
                  min="1"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Math.max(1, Number(e.target.value)))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] transition-all"
                />
              </div>
            </div>

            {/* Average Price Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#1A3551] mb-2">
                Average Botel Price ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF7A6B] w-5 h-5" />
                <input
                  type="number"
                  min="100"
                  value={averagePrice}
                  onChange={(e) => setAveragePrice(Math.max(100, Number(e.target.value)))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF7A6B]/20 focus:border-[#FF7A6B] transition-all"
                />
              </div>
            </div>

            {/* Program Benefits */}
            <div className="bg-gradient-to-br from-[#1A3551] to-[#1A3551]/90 text-white p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Program Benefits</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF7A6B]" />
                  <span>Clients save {discount}% on every booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#FF7A6B]" />
                  <span>You earn {commissionRate}% commission</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FF7A6B]" />
                  <span>Monthly payments & reporting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Results */}
          <div className="p-8 md:p-10 bg-[#1A3551]/90 text-white flex flex-col justify-between">
            <div>
              {/* Centered Toggle Buttons */}
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex rounded-full bg-white/10 p-1">
                  <button
                    onClick={() => setViewMode('monthly')}
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                      viewMode === 'monthly'
                        ? 'bg-[#FF7A6B] text-white shadow-lg'
                        : 'bg-transparent text-white/70 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setViewMode('annual')}
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                      viewMode === 'annual'
                        ? 'bg-[#FF7A6B] text-white shadow-lg'
                        : 'bg-transparent text-white/70 hover:text-white'
                    }`}
                  >
                    Annual
                  </button>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-2">
                Estimated {viewMode === 'monthly' ? 'Monthly' : 'Annual'} Earnings
              </h3>
              <p className="text-4xl font-extrabold mb-8 text-[#FF7A6B]">
                ${(viewMode === 'monthly' ? monthlyEarnings : annualEarnings).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-white/70">Monthly Revenue</p>
                  <p className="text-2xl font-bold">${monthlyEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Client Savings</p>
                  <p className="text-2xl font-bold text-[#FF7A6B]">${totalClientSavings.toLocaleString('en-US')}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Original Price</p>
                  <p className="text-lg font-semibold">${originalPrice.toLocaleString('en-US')}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Discounted Price</p>
                  <p className="text-lg font-semibold text-[#FF7A6B]">${priceAfterDiscount.toLocaleString('en-US')}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="w-full py-3 rounded-lg bg-[#FF7A6B] hover:bg-[#ff6553] transition font-semibold text-white">
                Get a Quote
              </button>
              <p className="text-xs text-white/60 mt-3 text-center">
                Calculation is indicative — actual results depend on sales and conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
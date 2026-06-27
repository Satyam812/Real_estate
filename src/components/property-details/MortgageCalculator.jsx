import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

export default function MortgageCalculator() {
  const [price, setPrice] = useState(45500000)
  const [downPayment, setDownPayment] = useState(9100000) // 20%
  const [interestRate, setInterestRate] = useState(5.5)
  const [years, setYears] = useState(30)

  const [results, setResults] = useState({ emi: 0, totalInterest: 0, totalPayment: 0 })

  useEffect(() => {
    const principal = price - downPayment
    const monthlyRate = (interestRate / 100) / 12
    const totalPayments = years * 12

    let emi = 0
    if (monthlyRate > 0) {
      emi = principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
    } else {
      emi = principal / totalPayments
    }

    const totalPayment = emi * totalPayments
    const totalInterest = totalPayment - principal

    setResults({
      emi: isNaN(emi) ? 0 : emi,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment
    })
  }, [price, downPayment, interestRate, years])

  // CountUp animations for the numbers
  const displayEmi = useCountUp(results.emi, 1)
  const displayTotalInterest = useCountUp(results.totalInterest, 1)
  const displayTotalPayment = useCountUp(results.totalPayment + downPayment, 1)

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
  }

  return (
    <section className="section-padding bg-dark-grey/20" aria-label="Mortgage Calculator">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Financial Planning
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Mortgage <span className="italic text-gradient-gold">Calculator</span>
          </h2>
        </motion.div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-soft-grey text-xs tracking-widest uppercase font-light">Property Price</label>
                  <span className="text-champagne font-medium">{formatCurrency(price)}</span>
                </div>
                <input 
                  type="range" 
                  min="1000000" max="100000000" step="500000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-champagne h-1 bg-glass-border rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-soft-grey text-xs tracking-widest uppercase font-light">Down Payment</label>
                  <span className="text-champagne font-medium">{formatCurrency(downPayment)} ({((downPayment/price)*100).toFixed(0)}%)</span>
                </div>
                <input 
                  type="range" 
                  min="0" max={price} step="100000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full accent-champagne h-1 bg-glass-border rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-soft-grey text-xs tracking-widest uppercase font-light">Interest Rate</label>
                    <span className="text-champagne font-medium">{interestRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="15" step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-champagne h-1 bg-glass-border rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-soft-grey text-xs tracking-widest uppercase font-light">Loan Term</label>
                    <span className="text-champagne font-medium">{years} Years</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" max="40" step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-champagne h-1 bg-glass-border rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-rich-black/50 rounded-2xl p-8 border border-glass-border text-center">
                <p className="text-soft-grey text-xs tracking-widest uppercase font-light mb-4">Estimated Monthly Payment</p>
                <div className="font-heading text-5xl md:text-6xl text-warm-white mb-8">
                  {formatCurrency(displayEmi)}
                </div>

                <div className="space-y-4 pt-8 border-t border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-soft-grey text-sm font-light">Principal</span>
                    <span className="text-warm-white">{formatCurrency(price - downPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-soft-grey text-sm font-light">Total Interest</span>
                    <span className="text-champagne">{formatCurrency(displayTotalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center font-medium pt-2">
                    <span className="text-warm-white text-sm">Total Cost of Property</span>
                    <span className="text-warm-white">{formatCurrency(displayTotalPayment)}</span>
                  </div>
                </div>
                
                <button className="btn-outline w-full justify-center mt-8 text-xs tracking-widest">
                  Apply for Pre-approval
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

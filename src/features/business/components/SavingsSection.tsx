import { useSavingsModal } from '../../../hooks/useSavingsModal'

export default function SavingsSection() {
  const { openModal } = useSavingsModal()

  return (
    <section className="bg-black pt-16 pb-24 text-center text-white">
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Big Yearly Savings</h2>
        <p className="text-[#22C55E] text-sm font-bold uppercase tracking-widest mb-8">
          FOR YOUR AUDIENCE
        </p>

        <div className="relative py-4 mb-10">
          <div className="absolute left-0 right-0 h-[1px] bg-[#22C55E]/30 top-0" />
          <span className="text-6xl md:text-7xl font-black text-[#22C55E] tracking-tighter">
            $2,030.00
          </span>
          <div className="absolute left-0 right-0 h-[1px] bg-[#22C55E]/30 bottom-0" />
        </div>

        <button
          onClick={() => openModal?.()}
          className="w-full bg-[#22C55E] hover:bg-green-600 text-black font-extrabold py-5 rounded-2xl text-lg uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer"
        >
          Calculate Savings
        </button>
      </div>
    </section>
  )
}

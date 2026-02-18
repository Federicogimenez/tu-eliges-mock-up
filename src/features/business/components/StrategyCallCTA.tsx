import { MdCalendarToday, MdCheckCircle, MdLock } from 'react-icons/md'
import BookCallButton from './BookCallButton'

interface StrategyCallCTAProps {
  onBookCall: () => void
}

const callItems = [
  'Identify the right access model (RSM or Bulk).',
  'Map it to your audience structure.',
  'Outline launch steps.',
  'Clarify reporting and revenue visibility.',
]

const LiveProgramItems = [
  'No Technology integration required.',
  'No merchant negotiations.',
  'No operational burden.',
]

export default function StrategyCallCTA({ onBookCall }: StrategyCallCTAProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center lg:max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Let’s Activate <br /> Your Buying Power Network
        </h2>
        <p className="text-gray-600 dark:text-zinc-300 mb-10 max-w-lg mx-auto">
          Join a 15-minute strategy call to determine the right access model for your organization.
        </p>

        {/* Card */}
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 text-left shadow-xl mb-8 border border-gray-200 dark:border-zinc-800">
          <h5 className="flex items-center gap-2 font-bold mb-6">
            <MdCalendarToday className="text-blue-b2b" />
            In this call we will:
          </h5>
          <ul className="space-y-4">
            {callItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <MdCheckCircle className="text-blue-b2b text-lg mt-0.5" />
                <p className="text-gray-600 dark:text-zinc-300 text-sm">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4 mx-auto max-w-xl my-10">
        {LiveProgramItems.map((item) => (
          <li key={item} className="flex items-center justify-center gap-3">
            <MdCheckCircle className="text-neutral-400 dark:text-neutral-700 text-lg mt-0.5" />
            <p className="text-gray-600 dark:text-zinc-300 text-sm">{item}</p>
          </li>
        ))}
      </ul>

        {/* CTA Button */}
        <BookCallButton onClick={onBookCall} text_1="Schedule a Strategy Call" text_2="Reserve Your Free Session" />

        {/* Footer */}
        <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 dark:text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
          <span className="flex items-center gap-1">
            <MdLock className="text-[12px]" /> No commitment
            required
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
          <span>Free consultation</span>
        </div>
      </div>
    </section>
  )
}

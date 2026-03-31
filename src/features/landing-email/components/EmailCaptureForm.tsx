import { useState, type FormEvent } from 'react'
import { useTranslation } from '../../../hooks/useTranslation'
import { motion, AnimatePresence } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'

interface EmailCaptureFormProps {
  variant: 'usa' | 'latam'
  context: 'form' | 'closing'
  isRegistered: boolean
  onRegister: (email: string) => void
}

export default function EmailCaptureForm({ variant, context, isRegistered, onRegister }: EmailCaptureFormProps) {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')

  const prefix = `landingEmail.${variant}.form`

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    // TODO: integrar con HubSpot — opciones: API propia en backend o form embedding
    console.log(`[LandingEmail] Email captured (${variant}):`, email)

    setTimeout(() => {
      onRegister(email)
    }, 500)
  }

  const isClosing = context === 'closing'

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {!isRegistered ? (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(`${prefix}.fieldPlaceholder`)}
              className={`w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors ${
                isClosing
                  ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40'
                  : 'bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-blue-uchooseit dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder:text-neutral-500'
              }`}
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-uchooseit text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              {t(`${prefix}.button`)}
            </button>
            <p className={`text-xs text-center ${
              isClosing ? 'text-white/60' : 'text-neutral-500 dark:text-neutral-400'
            }`}>
              {t(`${prefix}.microcopy`)}
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-2 text-sm py-4 ${
              isClosing ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-300'
            }`}
          >
            <MdCheckCircle className="shrink-0 text-green-500 text-xl mt-0.5" />
            <span>{t(`${prefix}.successMessage`)}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useCountry } from '../../../hooks/useCountry'
import type { CountryCode } from '../../../types/country'

interface HubSpotFormProps {
  context: 'form' | 'closing'
}

const PORTAL_ID = '44240130'
const SCRIPT_SRC = `https://js.hsforms.net/forms/embed/${PORTAL_ID}.js`

// TODO: completar con los form IDs reales de cada país
const FORM_IDS: Record<CountryCode, string> = {
  usa: '8c53addb-cd1c-468f-a653-e5ab63720c57',
  bra: '891f31d4-f74d-4278-8639-34bfcf68d387',
  arg: '891f31d4-f74d-4278-8639-34bfcf68d387',
  col: '891f31d4-f74d-4278-8639-34bfcf68d387',
  mex: '891f31d4-f74d-4278-8639-34bfcf68d387',
}

export default function HubSpotForm({ context }: HubSpotFormProps) {
  const { country } = useCountry()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const formId = FORM_IDS[country]
  const isClosing = context === 'closing'

  useEffect(() => {
    // Load the HubSpot embed script once globally
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)

    if (!script) {
      script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.defer = true
      document.head.appendChild(script)
    }

    // Watch for HubSpot to inject the form inside our container
    const observer = new MutationObserver(() => {
      if (containerRef.current?.querySelector('form, .hs-form, iframe')) {
        setIsLoading(false)
        observer.disconnect()
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true })
    }

    // Fallback: hide loader after 8s even if observer misses it
    const timeout = setTimeout(() => setIsLoading(false), 8000)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [formId])

  return (
    <div className="w-full max-w-xl mx-auto relative">
      {/* Loader */}
      {isLoading && (
        <div className="flex items-center justify-center py-6 gap-2">
          <div className={`w-5 h-5 border-2 rounded-full animate-spin border-white/30 border-t-white`} />
          <span className={`text-sm text-white`}>
            Loading...
          </span>
        </div>
      )}

      {/* HubSpot embed target */}
      <div
        ref={containerRef}
        className={`hs-form-frame -my-8 ${isClosing ? 'hubspot-closing' : 'hubspot-form'} ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'} transition-opacity duration-300`}
        data-region="na1"
        data-form-id={formId}
        data-portal-id={PORTAL_ID}
      />
    </div>
  )
}

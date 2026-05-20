import { useEffect, useRef, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

interface PillOption<T extends string | number> {
  value: T
  label: string
}

interface PillSelectProps<T extends string | number> {
  value: T
  options: PillOption<T>[]
  onChange: (value: T) => void
  ariaLabel?: string
}

/**
 * Selector custom: muestra el valor actual + chevron; al abrir despliega
 * las opciones como pills (chips wrap). ESC y click-outside cierran.
 * Reemplaza al <select> nativo cuando los <option> deben verse como pills
 * (los <option> nativos no aceptan CSS de border-radius/padding/bg).
 */
export default function PillSelect<T extends string | number>({
  value,
  options,
  onChange,
  ariaLabel,
}: PillSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  const current = options.find((o) => o.value === value) ?? options[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="flex w-full cursor-pointer items-center justify-between gap-2 bg-transparent text-base font-bold text-white outline-none"
      >
        <span className="truncate">{current?.label ?? ''}</span>
        <LuChevronDown
          className={`h-4 w-4 shrink-0 text-uc-fg-mute transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-2 flex flex-wrap gap-1.5 rounded-xl border border-uc-line bg-uc-ink p-2 shadow-[var(--uc-shadow-soft)]"
        >
          {options.map((o) => {
            const selected = o.value === value
            return (
              <button
                key={String(o.value)}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(o.value)
                  setOpen(false)
                }}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-colors sm:text-sm ${
                  selected
                    ? 'bg-blue-uchooseit text-white'
                    : 'border border-uc-line bg-transparent text-uc-fg-dim hover:bg-white/5 hover:text-white'
                }`}
              >
                {o.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

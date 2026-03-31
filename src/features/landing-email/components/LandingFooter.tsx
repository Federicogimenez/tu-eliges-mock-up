export default function LandingFooter() {
  return (
    <footer className="relative z-10 bg-neutral-950 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <img
          src="/uchooseit-white.svg"
          alt="Uchooseit"
          className="h-6 object-contain"
        />
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Uchooseit.us LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

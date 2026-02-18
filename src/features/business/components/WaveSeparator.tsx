export default function WaveSeparator() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="block w-full h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={[
            // Upper sine edge – 1.5 cycles (midline y=32, amplitude 32)
            'M 0,32',
            'C 172.8,0 307.2,0 480,32',
            'C 652.8,64 787.2,64 960,32',
            'C 1132.8,0 1267.2,0 1440,32',
            // Lower sine edge (same shape shifted 64px down)
            'L 1440,96',
            'C 1267.2,64 1132.8,64 960,96',
            'C 787.2,128 652.8,128 480,96',
            'C 307.2,64 172.8,64 0,96',
            'Z',
          ].join(' ')}
          fill="var(--color-blue-uchooseit)"
        />
      </svg>
    </div>
  )
}

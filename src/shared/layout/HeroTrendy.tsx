
interface HeroTrendyProps{
    logo: string;
    color: string;
}

export default function HeroTrendy({ logo, color }: HeroTrendyProps) {
  return (
    <section className='flex justify-center items-center w-full min-h-dvh'>
        <div className='h-fit flex flex-col justify-center items-center gap-x-4'>
            <img src={logo} alt="logo" className='size-32 object-contain object-center' />
            <h1 style={{color: `var(${color})`}} className="text-2xl">Hero Trendy</h1>
        </div>
    </section>
  )
}

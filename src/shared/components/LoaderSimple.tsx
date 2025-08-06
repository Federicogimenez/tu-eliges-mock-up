interface LoaderSimpleProps {
    width?: string;
    height?: string;
}

export default function LoaderSimple({ width='100%', height='100%' }:LoaderSimpleProps) {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <img src="/icons/bars.svg" alt="loading" width={width} height={height} className="size-10 object-contain object-center" />
    </div>
  )
}

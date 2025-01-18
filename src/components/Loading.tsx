
export function Loading (){
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <picture className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[60px] rounded-full bg-lightblue-primary animate-pulse-infinite "></picture>
      <img className="relative w-[30px]" src="/img/svg/loading.svg" alt="loading.." />
    </div>
    // <div className="loading">
    //     <img className="loading__loader" src="/img/svg/loading.svg" alt="loading.." />
    // </div>
  )
}

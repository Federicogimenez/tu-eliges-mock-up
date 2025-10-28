import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useSavingsModal } from "../../../hooks/useSavingsModal"
import { useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export default function CalculateSavingButton() {

    const { openModal } = useSavingsModal()
    const {height} = useWindowSize()
    const { scrollY } = useScroll(); 
    const [savingsBtn, setSavingsBtn] = useState(false)


  // --- Trigger lógico al pasar 100vh ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (height/2) && !savingsBtn) {
      setSavingsBtn(true);
    } else if (latest <= (height/2) && savingsBtn) {
      setSavingsBtn(false);
    }
  });
    
  return (
    <div className="fixed z-50 right-0 top-[15dvh]">
      <motion.button
          onClick={openModal}
          style={{
            animationDelay: '3s',
          }}
          className={`group relative animate-fade cursor-pointer font-semibold leading-[1.2] pr-2 rounded-full w-40 flex justify-center items-center gap-1 transition-all duration-200 hover:bg-green-600 hover:scale-105 border text-white bg-green-400 px-2 py-1 ${ savingsBtn ? 'translate-x-3/5 hover:translate-x-3' : 'translate-x-5 hover:translate-x-3' }`}
          >
            <img src="/icons/dollar.svg" alt="dollar" className="w-8" />
            <motion.span className={`transition-all ${ savingsBtn ? 'opacity-0 group-hover:opacity-100' : 'block'}`}
            >
              Calculate <br /> Savings
            </motion.span>
      </motion.button>
    </div>
  )
}

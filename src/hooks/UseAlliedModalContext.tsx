import { useContext } from "react"
import { AlliedModalStateContext } from "../context/AlliedModalProvider"

export function useAlliedModalContext(){
    return useContext(AlliedModalStateContext)
}
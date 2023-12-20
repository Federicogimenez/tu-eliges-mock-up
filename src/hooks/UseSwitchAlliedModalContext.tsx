import { useContext } from "react";
import { SwitchAlliedModalContext } from "../context/AlliedModalProvider";

export function useSwitchAlliedModalContext(){
    return useContext(SwitchAlliedModalContext)
}
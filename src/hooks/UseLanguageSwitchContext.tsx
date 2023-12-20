import { useContext } from "react";
import { LanguageSwitchContext } from "../context/Language";

export function useLanguageSwitchContext(){
    return useContext(LanguageSwitchContext)
}
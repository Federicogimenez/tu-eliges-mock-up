import { useContext } from "react";
import { LanguageContext } from "../context/Language";


export function useLanguageContext(){
    return useContext(LanguageContext)
}
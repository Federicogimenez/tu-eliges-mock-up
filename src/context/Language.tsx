import { useState, createContext } from 'react';
import { dictionaryList } from './LanguageOptions'
import { languageProvideChildren } from '../interfaces/LanguageProviderInterface';

export const LanguageContext = createContext(dictionaryList.en)
export const LanguageSwitchContext = createContext(()=>{})


export function LanguageProvider({ children }: languageProvideChildren) {
    
    const [userLanguage, setUserLanguage] = useState(dictionaryList.en);

    const toggleLanguage = ()=>{
        if (userLanguage == dictionaryList.es) {
            setUserLanguage(dictionaryList.en)
        }else{
            setUserLanguage(dictionaryList.es)
        }
    }

    return (
    <LanguageContext.Provider value={userLanguage}>
        <LanguageSwitchContext.Provider value={toggleLanguage}>
            {children}
        </LanguageSwitchContext.Provider>
    </LanguageContext.Provider>
    );
}
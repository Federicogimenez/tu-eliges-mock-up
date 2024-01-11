import { useLanguageContext } from "../hooks/UseLanguageContext"
import { useLanguageSwitchContext } from "../hooks/UseLanguageSwitchContext";

export default function SwitchLang(){

    const data = useLanguageContext();
    const toggleLanguage = useLanguageSwitchContext();

    const handleToggleLanguage = (): void => {
        toggleLanguage()
    }
    
    return (
        <div className="switch-languaje">
            { data['lang_current'] }
            <img src="/img/svg/arrow-up.svg" alt="" />
            <ul>
                <li onClick={handleToggleLanguage}>
                { data['lang_1'] }
                </li>
            </ul>
        </div>
    )
}

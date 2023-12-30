import { useState } from 'react'
import SwitchLang from './SwitchLang';
import { LegalBurgerOptions } from '../interfaces/LegalBurgerOptions';

export default function BurgerMenuAlternative(options: LegalBurgerOptions[]) {
    const [naviToggle, setnaviToggle] = useState(false)

    function callbackNaviToggle(){
        setnaviToggle(!naviToggle)
    }

    return (
        <div className="burger-alternative">
            <input type="checkbox" className="burger-alternative__checkbox" id="navi-toggle" readOnly checked={naviToggle} />
            
            <label htmlFor="navi-toggle" className="burger-alternative__button" onClick={callbackNaviToggle}>
                <span className="burger-alternative__icon"></span>
            </label>

            <div className="burger-alternative__background"></div>
            
            <nav className="burger-alternative__mob-nav">
                <ul className="burger-alternative__mob-nav--list">
                    {
                        Object.values(options).map(option=> <li className="burger-alternative__item">
                            <a href={'#'+ option.id} className="burger-alternative__mob-nav--link" onClick={callbackNaviToggle}>
                            {option.label}</a>
                            </li>
                        )
                    }
                    <SwitchLang />
                </ul>
            </nav>
            <nav className='burger-alternative__desk-nav'>
                {
                    Object.values(options).map(option=> <li className="burger-alternative__desk-nav--item">
                        <a href={'#'+ option.id} 
                            className={'burger-alternative__desk-nav--link'}>{option.label}</a>
                        </li>
                    )
                }
            </nav>
        </div>
    )
}
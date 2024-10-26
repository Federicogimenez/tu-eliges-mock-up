import { useNavigate } from "react-router"
import BurgerMenuAlternative from "../components/BurgerMenuAlternative"
import { useLanguageContext } from "../hooks/UseLanguageContext"
import { LegalBurgerOptions } from "../interfaces/LegalBurgerOptions"
import Footer from "../layout/Footer"


export default function Faqs() {
    const navigate = useNavigate();

    function handleRedirectHome (){
        navigate("/");
        window.scrollTo(0, 0)
    }

    const data = useLanguageContext()
    const burgerOptions: LegalBurgerOptions[] = [
        {
            id: 'option-1',
            label: data.faq_title_1
        },
        {
            id: 'option-2',
            label: data.faq_title_2
        },
        {
            id: 'option-3',
            label: data.faq_title_3
        },
        {
            id: 'option-4',
            label: data.faq_title_4
        },
        {
            id: 'option-5',
            label: data.faq_title_5
        },
        
    ]

    return (
            <div className="legals-page">
                    <div className="legals-page__content">
                        <header>
                            <img onClick={handleRedirectHome} src="/img/png/logo-alternative-tu-eliges.png" alt="tu eliges" />
                            <BurgerMenuAlternative {...burgerOptions} />
                        </header>
                        <article>
                            <h2>{data.faq_faq}</h2>
                            <section id="option-1">
                                <h5>{data.faq_title_1}</h5>
                                <p>
                                    { data.faq_content_1 }
                                </p>
                            </section>
                            <section id="option-2">
                                <h5>{data.faq_title_2}</h5>
                                <p>
                                    {data.faq_content_2_1}
                                    <a href="https://tueligesus.recurly.com/subscribe/tueliges_member?currency=USD">
                                        {data.faq_content_2_1_link}
                                    </a>
                                </p>
                                <p>{data.faq_content_2_2}</p>
                                <p>
                                    {data.faq_content_2_3_phrase_1}
                                    <a href="http://tueligesus.enjoymydeals.com/">
                                        {data.faq_content_2_3_link}
                                    </a>
                                    {data.faq_content_2_3_phrase_2}
                                </p>
                                <p>{data.faq_content_2_4}</p>
                                <p>{data.faq_content_2_5}</p>
                                <p>{data.faq_content_2_6}</p>
                                <p>{data.faq_content_2_7}</p>
                                <p>{data.faq_content_2_8}</p>
                                <p>{data.faq_content_2_9}</p>
                                <p>
                                    {data.faq_content_2_10_phrase_1}
                                    <a href="http://www.tueliges.us/">
                                        {data.faq_content_2_10_link1}
                                    </a>
                                    {data.faq_content_2_10_phrase_2}
                                    <a href="http://tueligesus.enjoymydeals.com/">
                                        {data.faq_content_2_10_link2}
                                    </a>
                                    {data.faq_content_2_10_phrase_3}
                                </p>
                            </section>
                            <section id="option-3">
                                <h5>{ data.faq_title_3 }</h5>
                                <p>
                                    { data.faq_content_3 }
                                </p>
                            </section>
                            <section id="option-4">
                                <h5>{ data.faq_title_4 }</h5>
                                <p>
                                    { data.faq_content_4 }
                                </p>
                            </section>
                            <section id="option-5">
                                <h5>{ data.faq_title_5 }</h5>
                                <p>
                                    { data.faq_content_5 }
                                </p>
                            </section>
                        </article>
                    </div>
                    <Footer />
            </div>
    )
}

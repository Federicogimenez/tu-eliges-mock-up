import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function AboutUs() {
    const data = useLanguageContext()

    return (
        <div className="about-us" id="about-us">
            <div className="about-us__text">
                <h6>
                    { data["aboutus_title"] }
                </h6>
                <p>
                    { data["aboutus_paragraph_1"] }
                </p>
                <p>
                    { data["aboutus_paragraph_2"] }
                </p>
                <p>
                    { data["aboutus_paragraph_3"] }
                </p>
                <a href="mailto:info@uchooseit.us">
                    { data["aboutus_cta"] }
                </a>
            </div>
            <div className="about-us__img">
                <img src="/img/png/about-us.png" alt="about us" />
            </div>
        </div>
    )
}

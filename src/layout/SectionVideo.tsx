import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function SectionVideo() {

    const data = useLanguageContext();

    return (
        <section className="section-video" id="video">
            <h3> { data["video_title"] } </h3>
            <p>{ data["video_subtitle"] } </p>

            <div className="section-video__video-box">
                <iframe 
                    src="https://vimeo.com/823121032/4adf9d1d10?share=copy" 
                    title="" 
                    width="600px"
                    height="500px"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </section>
    )
}
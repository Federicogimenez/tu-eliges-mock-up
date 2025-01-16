import { useLanguageContext } from "../hooks/UseLanguageContext"

export default function SectionVideo() {

    const data = useLanguageContext();

    return (
        <section className="section-video" id="video">
            <h3> { data["video_title"] } </h3>
            <p>{ data["video_subtitle"] } </p>

            <div className="section-video__video-box">
                <div style={{'padding':'56.25% 0 0 0','position':'relative'}}>
                        <iframe 
                            src="https://www.youtube.com/embed/p-14LYE-0Ho?si=1JlIk3tTEemNFfk7" 
                            title="Tu Eliges" 
                            style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
                    </div>
                </div>
        </section>
    )
}
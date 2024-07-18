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
                        src="https://player.vimeo.com/video/898604407?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture" 
                        style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} 
                        title="TuEliges - Video Tour subtitulado Español"></iframe></div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
        </section>
    )
}
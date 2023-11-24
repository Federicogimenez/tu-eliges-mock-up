
export default function SectionVideo() {
    return (
        <section className="section-video" id="video">
            <h3>Ahorrar dinero todos los días ahora es más fácil</h3>
            <p>¡Conoce cómo!</p>

            <div className="section-video__video-box">
                <iframe 
                    src="https://www.youtube.com/embed/AxR-wrIOoQw?si=iLStpK4Zy8efa676" 
                    title="" 
                    width="600px"
                    height="500px"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </section>
    )
}
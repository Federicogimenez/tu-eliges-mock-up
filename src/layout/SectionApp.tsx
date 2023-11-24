import SwiperApp from '../components/SwiperApp'

export default function SectionApp() {
  return (
    <div className='section-app' id='app'>
        <div className="section-app__border section-app__border--left"></div>
        <div className="section-app__content">
            <h5 className='section-app__content--title'>Resúmen de la aplicación móvil 
                <br />
                <span>Descuentos sobre la marcha</span>
            </h5>
            <p className='section-app__content--p'>
                Recibe alertas cuando estés cerca
                a un comercio amigo.
                Encuentra tus ofertas locales y
                preferidas en segundos.
                Además, descubre ofertas
                exclusivas que solo están
                disponibles en nuestra aplicación.
            </p>
            <div className='app-swiper-wrapper'>
                <SwiperApp />
            </div>
            <button className="section-app__content--btn">
                <span className="section-app__content--btn-visible">Obtener descuentos</span>
                <span className="section-app__content--btn-invisible">Subscribite!</span>
            </button>
        </div>
        <div className="section-app__border section-app__border--right"></div>
    </div>
  )
}

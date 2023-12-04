// import { useState } from 'react'


export default function AlliedModal() {

  // const [showModal, setShowModal] = useState(true);
  return (
    <>
        <div className='allied-modal'>
          <div className="allied-modal__modal">
            <span className="allied-modal__modal--close-btn">
              <img src="/img/svg/close.svg" alt="" />
            </span>
            <div className="allied-modal__modal--box-1">
                <div className="box-white">
                  <picture className="box-white__company-logo">
                    <img src="/img/png/company-name.webp" alt="" />
                  </picture>
                  <p className="box-white__text">
                    Como miembro de la comunidad [nombre aliado] tu membresía tiene un súper descuento del 50% para que ahorres en todas tus compras y salidas.
                  </p>
                  <p className="box-white__text">
                    Desde aquí puedes acceder a tu membresía anual o bien puedes recorrer nuestro sitio y conocer más sobre nuestros descuentos.
                  </p>
                </div>
            </div>
            <div className="allied-modal__modal--box-2">
              <div className="box-blue">
                <h4 className="box-blue__welcome">¡Bienvenido!</h4>
                <a className="box-blue__data" href="#">Conocer más sobre nuestros descuentos</a>
                <button className="box-blue__buy-btn">COMPRAR MEMBRESIA</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

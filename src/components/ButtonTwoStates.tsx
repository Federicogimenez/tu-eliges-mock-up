import { ButtonTwoStatesInterface } from "../interfaces/ButtonTwoStatesInterface";

export default function ButtonTwoStates({ animation='1', text_hover, text_static }: ButtonTwoStatesInterface) {

  return (
    <>
      { animation == '1' &&
        <a 
        target="_blank"
        href="https://uchooseitus.recurly.com/subscribe/uchooseit_member?currency=USD" 
        className="btn-two-states">
              <span className="btn-two-states__visible"> { text_static } </span>
              <span className="btn-two-states__invisible"> { text_hover } </span>
          </a>
      }
      { animation == '2' &&
        <a target="_blank"
        href="https://uchooseitus.enjoymydeals.com/" 
        className="btn-two-states-horizontal">
              <span className="btn-two-states-horizontal__visible"> { text_static } </span>
              <span className="btn-two-states-horizontal__invisible"> { text_hover } </span>
          </a>
      }
    </>
  )
}
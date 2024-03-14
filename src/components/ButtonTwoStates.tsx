import { ButtonTwoStatesInterface } from "../interfaces/ButtonTwoStatesInterface";

export default function ButtonTwoStates(options: ButtonTwoStatesInterface) {
  return (
    <>
        <a 
          href="https://uchooseit-us.recurly.com/subscribe/uchooseit_member?currency=USD" 
          className="btn-two-states">
            <span className="btn-two-states__visible"> { options.text_static } </span>
            <span className="btn-two-states__invisible"> { options.text_hover } </span>
        </a>
    </>
  )
}
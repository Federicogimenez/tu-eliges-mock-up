import { ButtonTwoStatesInterface } from "../interfaces/ButtonTwoStatesInterface";

export default function ButtonTwoStates(options: ButtonTwoStatesInterface) {
  return (
    <>
        <button className="btn-two-states">
            <span className="btn-two-states__visible"> { options.text_static } </span>
            <span className="btn-two-states__invisible"> { options.text_hover } </span>
        </button>
    </>
  )
}
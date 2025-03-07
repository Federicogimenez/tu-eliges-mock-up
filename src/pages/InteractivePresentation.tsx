import { useState } from "react"
import { Loading } from "../components/Loading"


export const InteractivePresentation = () => {
    const [loading, setloading] = useState(true)
    return (
      <>
      { loading ? <Loading /> : <></> }
        <div style={{width: "100%", height: "100%", background: "#000"}}>
            <iframe title="Presentation tueliges.us" allowFullScreen width="1920" height="1080" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
              onLoad={()=>{setloading(false)}}
              src="https://view.genially.com/675b354bc696c90d58f0d998" >
            </iframe>
        </div>
      </>
  )
}

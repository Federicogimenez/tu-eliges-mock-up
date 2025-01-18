import { useState } from "react"
import Loading from "../components/Loading"

export const InteractivePresentation = () => {
    const [loading, setloading] = useState(true)
  
    return (
          <div style={{width: "100%", height: "100vh", background: "#000"}}>
                  {
                    loading ? <Loading /> : <></>
                  }
                  <iframe title="Presentation uchooseit.us" width="1920" height="1080" style={{position: "absolute", top: 0, left: 0 ,width: "100%", height: "100%"}} 
                    onLoad={()=>{setloading(false)}}              
                    src="https://view.genially.com/6744a8f1aba0732a4c3ab855"  >
                  </iframe>
          </div>
    )
  }
  
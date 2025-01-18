import { useState } from "react";
import { Loading } from "../components/Loading";

interface PropType {
    allyPresentation: string
}
export const InteractiveProposal = ( { allyPresentation }:PropType) => {
  const [loading, setLoading] = useState(true);
    return (
    <div style={{width: "100%", height: "100%"}}>
        { loading ? <Loading /> : <></>}
            <iframe title="Proposal tueliges" width="1920" height="1080" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
              onLoad={()=>{setLoading(true)}}
              src={allyPresentation} >
            </iframe>
    </div>
  )
}

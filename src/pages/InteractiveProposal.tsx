
interface PropType {
    allyPresentation: string
}
export const InteractiveProposal = ( { allyPresentation }:PropType) => {
  
    return (
    <div style={{width: "100%", height: "100%", background: "#000"}}>
            <iframe title="Proposal uchooseit.us - KISS" frameBorder="0" width="1920" height="1080" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
            src={allyPresentation} >
            </iframe>
    </div>
  )
}

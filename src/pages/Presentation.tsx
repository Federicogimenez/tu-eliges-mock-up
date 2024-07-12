import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function Presentation() {

    const [searchParams] = useSearchParams();

    const url = useLocation().search;
    let id;
    
    if(url.includes('comercial')){
        id = searchParams.get('comercial');
    }
    

    return (
        <div>Presentation {id}</div>
    )
}

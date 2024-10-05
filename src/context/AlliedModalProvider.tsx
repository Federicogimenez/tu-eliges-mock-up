import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { alliedModalData, alliedModalProvideChildren } from "../interfaces/AlliedModalInterface";
import { useSearchParams } from "react-router-dom";

export const AlliedModalStateContext = createContext<alliedModalData>({
  alliedName: '',
  alliedCompanyImg: "",
  alliedCuponCode: "",
  isLoading: true,
  userNotFound: false
})
export const SwitchAlliedModalContext = createContext(()=>{})


export function AlliedModalProvider ({children}: alliedModalProvideChildren){

  const [searchParams] = useSearchParams();
  const [modalState, setModalState]= useState(false)

  function closeAlliedModal (){
    setModalState(false)
  }
  const [modalData, setModalData] = useState({
    alliedName: '',
    alliedCompanyImg: "",
    alliedCuponCode: "",
    isLoading: true,
    userNotFound: false
  })
  const url = useLocation().search;

  useEffect(() => {
    if(url.includes('?ally')){
      
      // console.log(searchParams.get('ally'));
      
      setModalState(true)

      const id = searchParams.get('ally');

    const urlFetch = `https://api.tueliges.us/public/ally-code/${id}`

    const api = async ()=>{
      const data = await fetch(urlFetch);
      const jsonData = await data.json();
      return jsonData
    };
    api()
    .then((data)=> {
      if(data){
        console.log('entro');
        
        setModalData({
          alliedName: data.allyCompanyName,
          alliedCompanyImg: data.allyCompanyLogo,
          alliedCuponCode: data.allyCoupons[0],
          isLoading: false,
          userNotFound: false
        })
      }else{
        setModalData({
          alliedName: '',
          alliedCompanyImg: '',
          alliedCuponCode: '',
          isLoading: false,
          userNotFound: true
        })}
    })
    .catch( err =>{
      if (err) { 
        setModalData({
          alliedName: '',
          alliedCompanyImg: '',
          alliedCuponCode: '',
          isLoading: false,
          userNotFound: true})
        }})
    }
  }, [url])

  return (
    <AlliedModalStateContext.Provider value={modalData}>
      <SwitchAlliedModalContext.Provider value={closeAlliedModal}>
        {modalState ? children : null}
      </SwitchAlliedModalContext.Provider>
    </AlliedModalStateContext.Provider>
  )
}
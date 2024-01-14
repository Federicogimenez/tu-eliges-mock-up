import { createContext, useEffect, useState } from "react";
import { alliedModalData, alliedModalProvideChildren } from "../interfaces/AlliedModalInterface";
import { useLocation } from "react-router";

export const AlliedModalStateContext = createContext<alliedModalData>({
  alliedName: '',
  alliedCompanyImg: "",
  isLoading: true,
  userNotFound: false,
})
export const SwitchAlliedModalContext = createContext(()=>{})


export function AlliedModalProvider ({children}: alliedModalProvideChildren){

  
  const [modalState, setModalState]= useState(false)

  function closeAlliedModal (){
    setModalState(false)
  }
  const [modalData, setModalData] = useState({
    alliedName: '',
    alliedCompanyImg: "",
    isLoading: true,
    userNotFound: false
  })
  const url = useLocation().search;

  useEffect(() => {

    if(url.includes('?ally')){
      setModalState(true)
    }
    const id = url.split('=').pop();

    const urlFetch = `https://api.tueliges.us/public/ally-code/${id}`
    console.log(urlFetch);
    

    async function fetchData(){
      const response = await fetch(urlFetch)
      // const response = await fetch(urlFetch, 
      //   {method: 'GET',
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "https://tueliges.us",
      //     "Access-Control-Allow-Methods":"PUT, POST, OPTIONS",
      //     "Access-Control-Allow-Headers": "Special-Request-Header",
      //     "Access-Control-Allow-Credentials": "true"
      //   }})
      const data = await response.json()
      return data
    }
    fetchData()
    .then(( data )=> {
        if(data){
        setModalData({
            alliedName: data.allyCompanyName,
            alliedCompanyImg: data.allyCompanyLogo,
            isLoading: false,
            userNotFound: false
          })
      }else{
        setModalData({
          alliedName: '',
          alliedCompanyImg: '',
          isLoading: false,
          userNotFound: true
        })
      } }
    )
    .catch(err=>console.log(err)) 
  }, [url])

  // fetch(`https://api.tueliges.us/public/ally-code/SFLHCC`, {
  //       method: 'GET',
  //       mode: 'no-cors', 
  //       headers:{
  //         "Content-Type": "application/json"
  //       }})
  // .then((resp)=>resp.json())
  // .then((data)=> JSON.stringify(data))
  // .then((data)=>console.log(data))
  // .catch(err=>console.log(err))




  return (
    <AlliedModalStateContext.Provider value={modalData}>
      <SwitchAlliedModalContext.Provider value={closeAlliedModal}>
        {modalState ? children : null}
      </SwitchAlliedModalContext.Provider>
    </AlliedModalStateContext.Provider>
  )
}










    // const id = url.split('=').pop();

    // const urlFetch = `https://api.tueliges.us/public/ally-code/${id}`
    // console.log(urlFetch);
    
    // setTimeout(() => {
  
        // closeAlliedModal()
              // if(id == 'marcelo'){
              //   setModalData({
              //       alliedName: 'Marcelo Gaffoglio',
              //       isLoading: false,
              //       userNotFound: false
              //     })
              // }else if(id == 'viviiana'){
              //   setModalData({
              //       alliedName: 'Viviana Valderrama',
              //       isLoading: false,
              //       userNotFound: false
              //     })
              // }else if(id == 'dario'){
              //   setModalData({
              //       alliedName: 'Dario',
              //       isLoading: false,
              //       userNotFound: false
              //     })
              // }else{
              //   setModalData({
              //     alliedName: '',
              //     isLoading: false,
              //     userNotFound: true
              //   })
              // }
            
    // }, 1500);
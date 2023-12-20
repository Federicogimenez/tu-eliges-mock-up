import { createContext, useEffect, useState } from "react";
import { alliedModalData, alliedModalProvideChildren } from "../interfaces/AlliedModalInterface";
import { useLocation } from "react-router";

export const AlliedModalStateContext = createContext<alliedModalData>({
  alliedName: '',
  isLoading: true,
  userNotFound: false
})
export const SwitchAlliedModalContext = createContext(()=>{})


export function AlliedModalProvider ({children}: alliedModalProvideChildren){

  
  const [modalState, setModalState]= useState(false)

  const [modalData, setModalData] = useState({
    alliedName: '',
    isLoading: true,
    userNotFound: false
  })
  const url = useLocation().search;

  useEffect(() => {
    if(url.includes('?ally')){
      setModalState(true)
    }
  }, [url])

  useEffect(() => {

    const id = url.split('=').pop();
    setTimeout(() => {
        fetch(`http://54.163.225.125:3011/?ally=${id}`)
          .then( resp => resp.json() )
          .then( data =>{
            console.log(data);
            
              if(data){
                setModalData({
                    alliedName: data.name,
                    isLoading: false,
                    userNotFound: false
                  })
              }else{
                setModalData({
                  alliedName: '',
                  isLoading: false,
                  userNotFound: true
                })
              }
            } 
          ).catch(err=>console.log(err))
    
        // closeAlliedModal()

    }, 1000);
  }, [modalState, url])
  


  function closeAlliedModal (){
    setModalState(false)
  }
  return (
    <AlliedModalStateContext.Provider value={modalData}>
      <SwitchAlliedModalContext.Provider value={closeAlliedModal}>
        {modalState ? children : null}
      </SwitchAlliedModalContext.Provider>
    </AlliedModalStateContext.Provider>
  )
}

import {createContext, useState} from 'react'

const counterContextData = createContext()


const CounterContextFun = ({children})=>{

  const [count,setCounter] = useState(10)
  const buttonHandler = () =>{
      setCounter(count+1)
  }

  return(
  <>
  <counterContextData.Provider value={{count,buttonHandler}}>
  {children}
  </counterContextData.Provider>
  </>
  )
}

export {CounterContextFun, counterContextData}
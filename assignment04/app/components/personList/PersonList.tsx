"use client"
import Button from "@/app/components/button/Button"
import {useState} from "react"
export default function Home() {
  var personNames:string[]=["Ali","Hassan","Daud","Nashit","Hamza","DJ"]
  var [index,setIndex]=useState(0)
  function NextHandler(){
    const nextIndex=index>=personNames.length-1 ? 0:index+1
    setIndex(nextIndex)
  }
  function PreviousHandler(){
    const prevIndex = index <= 0 ? personNames.length - 1 : index - 1;
    setIndex(prevIndex);
  }
  return (
    <main>
   <Button title="Previous" function={PreviousHandler}/>
   <h2>{personNames[index]}</h2>
   <Button title="Next" function={NextHandler}/>
  
    </main>
  )
}

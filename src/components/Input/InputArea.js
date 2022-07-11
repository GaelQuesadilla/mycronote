// Dependencies
import { useState } from "react"
import TextAreaAutoSize from "react-textarea-autosize"

export const InputArea = ()=>{
  const [areaText, setAreaText] = useState("");

  return (<TextAreaAutoSize 
    onChange={(event)=>setAreaText(event.target.value)}
    value={areaText}/>)
}
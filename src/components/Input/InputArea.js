// Dependencies
import { useState } from "react"
import TextAreaAutoSize from "react-textarea-autosize"

/**
 * 
 * @param {object} props - areaText, setAreaText : react state 
 * @returns {Component} Autorezise textarea
 */
export const InputArea = (props)=>{
  const [areaText, setAreaText] = props
  return (<TextAreaAutoSize 
    onChange={(event)=>setAreaText(event.target.value)}
    value={areaText}/>)
}
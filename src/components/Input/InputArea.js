// Dependencies
import TextAreaAutoSize from "react-textarea-autosize"

/**
 * 
 * @param {object} props - content : react state, handleChange: function 
 * @returns {Component} Autorezise textarea
 */
export const InputArea = (props)=>{
  const {content, handleChange} = props
  return (<TextAreaAutoSize 
    onChange={(event)=>handleChange(event)}
    value={content}/>)
}
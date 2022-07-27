// Dependencies
import TextAreaAutoSize from "react-textarea-autosize"
// Styles
import "./InputArea.scss"
/**
 * 
 * @param {object} props - content : react state, handleChange: function 
 * @returns {Component} Autorezise textarea
 */
export const InputArea = (props)=>{
  const {content, handleChange} = props
  return (<TextAreaAutoSize 
    className="input-area text--roboto-mono"
    minRows={1}
    placeholder="Start ..."
    onChange={(event)=>handleChange(event)}
    value={content}
    // autoFocus
    />)
}
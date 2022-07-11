import ReactMarkdown from "react-markdown"

/**
 * Component to display the content in markdown
 * @param {object} - content:string 
 * @returns {Component}  React markdown component with content
 */
export const DisplayContent = (props)=>{

  return<ReactMarkdown>{props.content}</ReactMarkdown>

}

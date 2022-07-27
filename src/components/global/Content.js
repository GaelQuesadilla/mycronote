//Styles
import "./Content.scss"
/**
 * Default content container
 * @param {object} props 
 * @returns {Component} Content component
 */
export const Content = (props)=>{

  return <div className={`content content--${props.name}`}>
    {props.children}
  </div>
}
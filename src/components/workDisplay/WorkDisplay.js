// Dependencies
import { useState } from "react";

// Components
import { InputArea } from "../Input/InputArea";
import { DisplayContent } from "../displayContent/DisplayContent";
import { UseItem } from "../../hooks/UseItem";

/**
 * Component see and make changes
 * @param {object} props - storageName:string, itemId:string 
 * @returns {Component} Input and markwdown display
 */
export const WorkDisplay = (props) => {
  const {storageName, itemId} = props
  const [content, setContent, item] = UseItem(storageName, itemId)

  const handleChange = (event)=>{
    setContent(event.target.value)
  }

  console.debug("Rendering WorkDisplay component", {storageName, itemId, content, item})
  return (
    <>
      <InputArea content={content} handleChange={handleChange}/>
      <DisplayContent content={content}/>
    </>
  );
};

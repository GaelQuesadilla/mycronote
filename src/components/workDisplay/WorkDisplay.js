// Dependencies
import { useState } from "react";

// Components
import { InputArea } from "../input/InputArea";
import { DisplayContent } from "../displayContent/DisplayContent";

export const WorkDisplay = () => {
  const [content, setContent] = useState("")

  const handleChange = (event)=>{
    setContent(event.target.value)
  }

  return (
    <>
      <InputArea content={content} handleChange={handleChange}/>
      <DisplayContent content={content}/>
    </>
  );
};

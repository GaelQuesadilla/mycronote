// Dependencies
// Components
import { InputArea } from "../Input/InputArea";
import { DisplayContent } from "../displayContent/DisplayContent";
import { UseItem } from "../../hooks/UseItem";

// Styles
import "./WorkDisplay.scss";

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

  return (
    <div className="work-display-area">
      <div className="work-display-area__input">
        <InputArea content={content} handleChange={handleChange} />
      </div>

      <div className="work-display-area__markdown">
        <DisplayContent content={content} />
      </div>
    </div>
  );
};

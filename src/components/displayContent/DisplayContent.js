import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
//Styles
import "./DisplayContent.scss"
/**
 * Component to display the content in markdown
 * @param {object} - content:string
 * @returns {Component}  React markdown component with content
 */
export const DisplayContent = (props) => {
  const { itemId } = useParams();
  return (
    <ReactMarkdown className="display-content text--roboto-mono" transformLinkUri={(url) => `${itemId}/${url}`}>
      {props.content}
    </ReactMarkdown>
  );
};

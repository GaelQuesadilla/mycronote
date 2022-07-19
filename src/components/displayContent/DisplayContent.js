import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

/**
 * Component to display the content in markdown
 * @param {object} - content:string
 * @returns {Component}  React markdown component with content
 */
export const DisplayContent = (props) => {
  const { itemId } = useParams();
  return (
    <ReactMarkdown transformLinkUri={(url) => `${itemId}/${url}`}>
      {props.content}
    </ReactMarkdown>
  );
};

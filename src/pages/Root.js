import { WorkDisplay } from "../components/workDisplay/WorkDisplay";
import { useParams } from "react-router-dom";
import { WorkNav } from "../components/workNav/WorkNav";
import { Content } from "../components/global/Content";

/**
 * Index page, display the elements to work properly
 * @returns {Component} Root Component
 */
const Root = () => {
  const params = useParams();
  const {storageName, itemId} = params
  return (
    <Content name="root">
      <WorkNav/>
      <WorkDisplay storageName={storageName} itemId={itemId}></WorkDisplay>
    </Content>
  );
};

export default Root;

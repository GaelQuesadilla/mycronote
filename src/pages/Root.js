import { WorkDisplay } from "../components/workDisplay/WorkDisplay";
import { useParams } from "react-router-dom";

const Root = () => {
  const { storageName, itemId } = useParams();
  return (
    <>
      <WorkDisplay storageName={storageName} itemId={itemId}></WorkDisplay>
    </>
  );
};

export default Root;

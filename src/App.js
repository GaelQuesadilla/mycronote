// Dependencies
import { Route, Routes, Navigate } from "react-router-dom";
import { OpenPage } from "./pages/OpenPage";

// Components
import Root from "./pages/Root";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/:storageName/:itemId/" element={<Root/>} />
        <Route exact path="/:storageName/:itemId/:scoop/:itemName/" element={<OpenPage/>} />
        <Route path="*" element={<Navigate replace to="/default/root"/>}/> 
      </Routes>


    </>
  );
};

export default App;

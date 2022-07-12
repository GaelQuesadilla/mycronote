// Dependencies
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Root from "./pages/Root";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/:storageName/:itemId/" element={<Root/>} />
        <Route path="*" element={<Navigate replace to="/default/root"/>}/> 
      </Routes>


    </>
  );
};

export default App;

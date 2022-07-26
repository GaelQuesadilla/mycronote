// Dependencies
import { Route, Routes, Navigate } from "react-router-dom";
// Components
import Root from "./pages/Root";
import { OpenPage } from "./pages/OpenPage";


/**
 * App container that handle the routes in app
 * @returns {Component} App component
 */
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/:storageName/:itemId/" element={<Root/>} />
        <Route exact path="/:storageName/:itemId/:scoop/:itemName/" element={<OpenPage/>} />
        <Route path="*" element={<Navigate replace to="/default/root"/>}/> 
      </Routes>


    </div>
  );
};

export default App;

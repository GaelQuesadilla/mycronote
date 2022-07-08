// Dependencies
import { Route, Routes } from "react-router-dom";

// Components
import Root from "./pages/Root";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Root/>} />
      </Routes>
    </>
  );
};

export default App;

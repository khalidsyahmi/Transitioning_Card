import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
import {
  //main
  CardTransitionMain,
  PageOne,
  //secondary
} from "./pages";

import "./App.css";

function App() {
  return (
    <div className="bg-indigo-500 min-h-screen">
      <BrowserRouter>
        <Routes>
          {/* card home */}
          <Route path="/" element={<CardTransitionMain />} />
          {/* card pages */}
          <Route path="/page-one" element={<PageOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

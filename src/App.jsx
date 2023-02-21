import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
import {
  //main
  CardTransitionMain,
  PageOne,
  //secondary
} from "./pages";

import { CardPageData } from "./data/dummy";

import "./App.css";

function App() {
  return (
    <div className="bg-indigo-500 min-h-screen">
      <BrowserRouter>
        <Routes>
          {/* card home */}
          <Route path="/" element={<CardTransitionMain />} />
          {/* card pages */}
          <Route
            path="/page-one"
            element={
              <PageOne
                profile={CardPageData[0].profile}
                h1={CardPageData[0].h1}
                p1={CardPageData[0].p1}
                p2={CardPageData[0].p2}
              />
            }
          />
          {/* Test dummy data */}
          <Route
            path="/page-two"
            element={
              <PageOne
                profile={CardPageData[1].profile}
                h1={CardPageData[1].h1}
                p1={CardPageData[1].p1}
                p2={CardPageData[1].p2}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

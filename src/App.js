import { BrowserRouter, Routes, Route } from "react-router-dom";

import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<One />}/>
        <Route path="two" element={<Two />} />
        <Route path="three" element={<Three />} />
      {/* {peopleArr.map((personObj, index) => (
        <PersonCard2 key={index} firstname={personObj.firstname} lastname={personObj.lastname} age={personObj.age} hairColor={personObj.hairColor}
        />
      ))} */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

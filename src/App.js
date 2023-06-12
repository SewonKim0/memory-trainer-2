import './App.css';
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  //state: sections
  const [sections, setSections] = useState({
    "sectionList": [],
    "nextSectionId": 0,
    "hideValues": false
  });

  return <div id="app">
    <Navbar sections={sections} />
  </div>
}

export default App;

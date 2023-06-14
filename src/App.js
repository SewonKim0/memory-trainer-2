import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sections from "./Components/Sections/Sections";

function App() {
  //state: sections
  const [sections, setSections] = useState({
    "sectionList": [],
    "nextSectionId": 0,
    "hideValues": false
  });

  //TEST: (sectionsDisplay, deleteCorrectId)
  useEffect(() => {
    //CASE 1
    setSections({
      "sectionList": {
        "0": {
          "sectionName": "Section 0",
          "entryList": [0, 1],
          "nextEntryId": 2
        },

        "1": {
          "sectionName": "Section 1",
          "entryList": [],
          "nextEntryId": 0
        },

        "2": {
          "sectionName": "Section 2",
          "entryList": [],
          "nextEntryId": 0
        }
      },
      "nextSectionId": 3,
      "hideValues": false
    });
  }, [])

  return <div id="app">
    {/* Navbar */}
    <Navbar 
      sections={sections} 
      //callback function: delete given section by id
      deleteSection={(sectionId) => {
        setSections((prevSections) => {
          delete prevSections.sectionList[sectionId];
          return prevSections;
        });
      }}  
    />

    {/* Sections */}
    <Sections
      sections={sections}
    />
  </div>
}

export default App;

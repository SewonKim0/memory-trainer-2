import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";

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
          "entryList": {},
          "nextEntryId": 0
        },

        "1": {
          "sectionName": "Section 1",
          "entryList": {},
          "nextEntryId": 0
        },

        "2": {
          "sectionName": "Section 2",
          "entryList": {},
          "nextEntryId": 0
        }
      },
      "nextSectionId": 3,
      "hideValues": false
    });

    //CASE 2
    // setSections({
    //   "sectionList": {
    //     "0": {
    //       "sectionName": "Section 0 Eeeeeeeeeeeeeeeeeeee",
    //       "entryList": {},
    //       "nextEntryId": 0
    //     },

    //     "1": {
    //       "sectionName": "Section 1 32wewe fwefwe fwe fewf we fwef wef ",
    //       "entryList": {},
    //       "nextEntryId": 0
    //     }
    //   },
    //   "nextSectionId": 2,
    //   "hideValues": false
    // });
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
  </div>
}

export default App;

import "./Navbar.css";
import { useState } from "react";
import { BiAdjust } from "react-icons/bi";

export default function Navbar({ sections, deleteSection }) {
    //state: whether to show delete dropdown menu
    const [deleteDropdownShow, setDeleteDropdownShow] = useState(false);

    return <div id="navbar">
        {/* Back Button */}
        <a 
            id="back"
            href="https://sewonkim0.github.io/portfolio/"
        >
            <h3> Back </h3>
        </a>

        {/* Delete Section Button */}
        <button
            id="delete-section"
            //set class based on deleteDropdownShow
            className={!deleteDropdownShow ? "" : "dropdown"}
            onClick={() => {
                //toggle dropdown
                setDeleteDropdownShow(!deleteDropdownShow);
            }}
        >
            {/* Title */}
            <h3> Delete Section </h3>

            {/* Dropdown Menu: Render if deleteDropDownShow */}
            {!deleteDropdownShow ? null :
            //if no sections: display no sections msg
            sections.sectionList.length === 0 ? <p> No Sections </p> :
            //List of sections to delete
            Object.entries(sections.sectionList).map(([sectionId, section]) => {
                //unpack section
                let {sectionName} = section;

                return <div
                    key={sectionId}
                    onClick={() => {
                        //delete section by id
                        deleteSection(sectionId);
                    }}
                >
                    <p> {sectionName} </p>
                </div>;
            })}
        </button>

        {/* Hide Values Button */}
        <button id="hide-values">
            <h3> Hide Values </h3>
        </button>

        {/* Light/Dark Button */}
        <button id="light-dark">
            <BiAdjust
                size="100%"
            />
        </button>
    </div>
}
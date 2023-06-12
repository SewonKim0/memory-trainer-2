import "./Navbar.css";
import { useState } from "react";
import { BiAdjust } from "react-icons/bi";

export default function Navbar({ sections }) {
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
            class={!deleteDropdownShow ? "" : "dropdown"}
            onClick={() => {
                //toggle dropdown
                setDeleteDropdownShow(!deleteDropdownShow);
            }}
        >
            {/* Title */}
            <h3> Delete Section </h3>

            {/* Dropdown Menu: Render if deleteDropDownShow */}
            {!deleteDropdownShow ? null :
            //List of sessions to delete
            sections.sectionList.map((section) => {
                //unpack section
                let {sectionName, sectionId} = section;

                return <button
                    onClick={() => {
                        //delete section by id
                    }}
                >
                    <p> {sectionName} </p>
                </button>;
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
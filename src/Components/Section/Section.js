import "./Section.css";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Section({ section, sectionId }) {
    //unpack section
    let {sectionName, entryList, nextEntryId} = section;

    //state: entries
    const [entries, setEntries] = useState({});

    return <div id="section">
        {/* Name */}
        <div id="name">
            <h2> {sectionName} </h2>
        </div>

        {/* Entry List */}
        <div id="entry-list">
            {entryList.map((entryId) => {
                {/* Entry */}
                return <div>
                    {/* Key */}
                    <textarea
                        id="key"
                    ></textarea>

                    <h3> : </h3>

                    {/* Value */}
                    <textarea
                        id="value"
                    ></textarea>

                    {/* Delete Entry Button */}
                    <button
                        //click: delete entry
                        onClick={() => {
                            //
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
            })}

            {/* Add Entry Button */}
            <button>
                <BiChevronDown
                    size="100%"
                />
            </button>
        </div>
    </div>
}
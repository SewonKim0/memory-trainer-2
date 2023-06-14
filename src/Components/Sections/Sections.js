import "./Sections.css";
import Section from "./../Section/Section";

export default function Sections({ sections }) {
    return <div id="sections">
        {/* Section List */}
        <div id="section-list">
            {Object.entries(sections.sectionList).map(([sectionId, section]) => {
                return <Section
                    section={section}
                    sectionId={sectionId}
                />
            })}
        </div>
        
        {/* Add Section Button */}
        <button
            //click: add new section
            onClick={() => {
                //
            }}
        >
            <h3> Add Section </h3>
        </button>
    </div>
}
export default function aboutTabHtmlSetUp() {
    const refs = {
        contentDiv: document.querySelector("div#content"),
        heading: document.createElement("h1"),
        subSec1Heading1: document.createElement("h2"),
        subSec1Par1: document.createElement("p"),
        subSec2Heading1: document.createElement("h2"),
        subSec2Par1: document.createElement("p"),
        subSec3Heading1: document.createElement("h2"),
        subSec3Ul1: {parent1: document.createElement("ul"), parent1children1: document.createElement("li"), parent1children2: document.createElement("li"),}
    }

    for (const ref in refs){
        if (ref === "contentDiv") continue
        if (!(ref.includes("subSec") && ref.includes("Ul"))){
            refs.contentDiv.appendChild(refs[ref])
        } else {
            let currentParent
            for (const subRef in refs[ref]){
                if (!subRef.includes("children")){
                    currentParent = refs[ref][subRef];
                    refs.contentDiv.appendChild(currentParent);
                } else {
                    currentParent.appendChild(refs[ref][subRef]);
                }
            }
        }      
    };
    
    refs.heading.append("My Restaurant");
    refs.subSec1Heading1.append("About")
    refs.subSec1Par1.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.")
    refs.subSec2Heading1.append("Location")
    refs.subSec2Par1.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.")
    refs.subSec3Heading1.append("Contact")
    refs.subSec3Ul1.parent1children1.append("Email: realemail@something.com")
    refs.subSec3Ul1.parent1children2.append("Telephone: 555-555-5555")

    return "about" //to indicate that the was loaded and assign it to a variable in index.js later.
}
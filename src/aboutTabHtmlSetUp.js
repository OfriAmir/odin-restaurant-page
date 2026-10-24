import odinImage from "./odin-lined.png"
export default function aboutTabHtmlSetUp() {
    function createSubSecDivsBoilerplateObj() {
    return {parent1: document.createElement("div"), parent1children1: document.createElement("h3"), parent1children2: document.createElement("p"), parent1children3: document.createElement("img")}
    }
    const refs = {
        contentDiv: document.querySelector("div#content"),
        heading: document.createElement("h1"),
        desc: document.createElement("p"),
        subHeading1: document.createElement("h2"),
        subSec1Div1: createSubSecDivsBoilerplateObj(),
        subSec1Div2: createSubSecDivsBoilerplateObj(),
        subHeading2: document.createElement("h2"),
        subSec2Div1: createSubSecDivsBoilerplateObj(),
        subSec2Div2: createSubSecDivsBoilerplateObj(),
        subHeading3: document.createElement("h2"),
        subSec3Div1: createSubSecDivsBoilerplateObj(),
        subSec3Div2: createSubSecDivsBoilerplateObj(),
    }

    for (const ref in refs){
        if (ref === "contentDiv") continue
        if (!(ref.includes("subSec") && ref.includes("Div"))){
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
    
    refs.heading.append("The Menu");
    refs.desc.append("This month's concept is Mexican food.");
    refs.desc.classList += "desc"

    refs.subHeading1.append("First Course");
    refs.subSec1Div1.parent1children1.append("Burritos");
    refs.subSec1Div1.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");
    refs.subSec1Div2.parent1children1.append("Memela");
    refs.subSec1Div2.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");

    refs.subHeading2.append("Second Course");
    refs.subSec2Div1.parent1children1.append("Burritos");
    refs.subSec2Div1.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");
    refs.subSec2Div2.parent1children1.append("Memela");
    refs.subSec2Div2.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");

    refs.subHeading3.append("Dessert");
    refs.subSec3Div1.parent1children1.append("Burritos");
    refs.subSec3Div1.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");
    refs.subSec3Div2.parent1children1.append("Memela");
    refs.subSec3Div2.parent1children2.append("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis perspiciatis voluptatum vel ducimus quasi labore, enim sequi! Cupiditate similique aut libero corporis deserunt deleniti hic esse ullam modi nostrum.");
    return "about" //to indicate that the was loaded and assign it to a variable in index.js later.
}
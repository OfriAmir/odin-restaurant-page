import odinImage from "./odin-lined.png"
export default function homeTabHtmlSetUp() {
    const refs = {
        // navBtns: Array.from(document.querySelectorAll("header nav button")),
        contentDiv: document.querySelector("div#content"),
        heading: document.createElement("h1"),
        heading2: document.createElement("h2"),
        heading2Quote: document.createElement("q"),
        heading2Link: document.createElement("a"),
        desc: document.createElement("p"),
        img: document.createElement("img")
    }

    refs.contentDiv.appendChild(refs.heading);
    refs.contentDiv.appendChild(refs.heading2);
    refs.heading2.appendChild(refs.heading2Quote);
    refs.heading2.appendChild(refs.heading2Link);
    refs.contentDiv.appendChild(refs.desc);
    refs.contentDiv.appendChild(refs.img);
    
    // const navBtnsTxt = ["Home", "Menu", "About"]
    // refs.navBtns.forEach((node ,index) => node.append(navBtnsTxt[index]));
    refs.heading.append("My Restaurant");
    refs.heading2Quote.append("The best restaurant in the world!");
    refs.heading2Link.append("Some critic");
    refs.heading2Link.setAttribute("href","#")
    const heading2Txt = document.createTextNode(" - ");
    refs.heading2.insertBefore(heading2Txt, refs.heading2Quote.nextSibling);
    refs.desc.append("This is the my restaurant. It's real.");
    refs.desc.classList += "desc"
    refs.img.src = odinImage;
    return "home" //to indicate that the was loaded and assign it to a variable in index.js later.
}
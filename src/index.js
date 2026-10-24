import homeTabHtmlSetUp from "./homeTabHtmlSetUp.js";
import menuTabHtmlSetUp from "./menuTabHtmlSetUp.js";
import aboutTabHtmlSetUp from "./aboutTabHtmlSetUp.js";

import "./styles.css"

const mainFunc = (function(){
    let currentPageLoaded = homeTabHtmlSetUp();
    const nav = document.querySelector("nav");
    const contentDiv = document.querySelector("div#content");
    function cleanContent(){
        let contentElements = document.querySelectorAll("div#content>*");
        contentElements.forEach(ref => contentDiv.removeChild(ref))
    }
    nav.addEventListener("click", (e)=>{
        if (e.target.textContent == "Home" && !(currentPageLoaded == "home")){
            cleanContent()
            currentPageLoaded = homeTabHtmlSetUp()
        } else if (e.target.textContent == "Menu" && !(currentPageLoaded == "menu")){
            cleanContent()
            currentPageLoaded = menuTabHtmlSetUp()
        } else if (e.target.textContent == "About" && !(currentPageLoaded == "about")){
            cleanContent()
            currentPageLoaded = aboutTabHtmlSetUp()
        }
    })
})()
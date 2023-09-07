import { delPageContent } from "./helperFuncs";

const aboutUsElem = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutus_header';
    aboutUsHeader.innerText = 'About Us';

    const aboutUsContentContainer = document.createElement('div');
    aboutUsContentContainer.id = 'aboutus_contentcontainer';


}

const aboutUsClick = () => {
    const aboutUsTab = document.getElementById('aboutus_tab');

    aboutUsTab.addEventListener('click', ()=> {
        aboutUsElem();
    })
}



export { aboutUsClick }
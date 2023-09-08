import { delPageContent } from "./helperFuncs";

const aboutUsElem = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);

    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.id = 'aboutus_container';


    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutus_header';
    aboutUsHeader.innerText = 'Who are We?';

    const aboutUsImage = new Image(300, 600);
    aboutUsImage.src = '../src/images/mihai-moisa-cafeexterior-unsplash.jpg'


    const aboutUsContentContainer = document.createElement('div');
    aboutUsContentContainer.id = 'aboutus_contentcontainer';

    const aboutUsText = document.createElement('p');
    aboutUsText.id = 'aboutus_text'
    aboutUsText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    aboutUsContentContainer.append(
        aboutUsImage, 
        aboutUsText
    );

    aboutUsContainer.append(
        aboutUsHeader,
        aboutUsContentContainer
    );

    contentDiv.appendChild(aboutUsContainer);
}

const aboutUsClick = () => {
    const aboutUsTab = document.getElementById('aboutus_tab');

    aboutUsTab.addEventListener('click', ()=> {
        aboutUsElem();
    })
}



export { aboutUsClick }
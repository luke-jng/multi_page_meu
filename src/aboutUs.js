import { delPageContent } from "./helperFuncs";

const aboutUsElem = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);

    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.id = 'aboutus_container';


    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutus_header';
    aboutUsHeader.innerText = 'Who We Are';


    const aboutUsImageContainer = document.createElement('div');
    aboutUsImageContainer.className = 'aboutus_imagecontainer';

    const aboutUsImage = new Image(300, 550);
    aboutUsImage.id = 'aboutus_image';
    aboutUsImage.src = '../src/images/mihai-moisa-cafeexterior-unsplash.jpg'

    const aboutUsImageOverlay = document.createElement('div');
    aboutUsImageOverlay.className  = 'aboutus_imageoverlay';
    
    const aboutUsImageOverlayContent = document.createElement('div');
    aboutUsImageOverlayContent.className  = 'aboutus_imageoverlaycontent turn_white';
    aboutUsImageOverlayContent.innerHTML = 'Photo by <a class="refsource" href="https://unsplash.com/@moisamihai092">Mihai Moisa</a> on <a class="refsource" href="https://unsplash.com">Unsplash</a>'

    aboutUsImageOverlay.appendChild(aboutUsImageOverlayContent);
    aboutUsImageContainer.append(aboutUsImage, aboutUsImageOverlay);

    const aboutUsContentContainer = document.createElement('div');
    aboutUsContentContainer.id = 'aboutus_contentcontainer';

    const aboutUsText = document.createElement('p');
    aboutUsText.id = 'aboutus_text'
    aboutUsText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    aboutUsContentContainer.append(
        aboutUsImageContainer, 
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
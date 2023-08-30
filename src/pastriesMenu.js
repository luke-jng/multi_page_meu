import { delPageContent, menuItemGen } from "./helperFuncs";

const pastriesMenuElems = () => {

    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);
    
    const menuHeader = document.createElement('h2');
    menuHeader.id = "pastries_header";
    menuHeader.innerText = "Pastries";

    // const croissantElem = document.createElement('div');
    // croissantElem.id = "croissant";
    // croissantElem.innerText = "Croissant";

    // const doughnutElem = document.createElement('div');
    // doughnutElem.id = "doughnut";
    // doughnutElem.innerText = "Doughnut";

    // const puddingElem = document.createElement('div');
    // puddingElem.id = "pudding";
    // puddingElem.innerText = "Pudding";

    const croissantElem = menuItemGen('croissant', "Croissant", "$4.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    const doughnutElem = menuItemGen('doughnut', "Doughnut", "$2.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    const puddingElem = menuItemGen('pudding', "Pudding", "$6.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu_container'

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(croissantElem);
    menuContainer.appendChild(doughnutElem);
    menuContainer.appendChild(puddingElem);

    contentDiv.appendChild(menuContainer);
}

const pastriesTabClick = () => {
    const pastriesTab = document.getElementById('pastries_tab');

    pastriesTab.addEventListener('click', () => {
        pastriesMenuElems();
    })
}
export { pastriesTabClick };
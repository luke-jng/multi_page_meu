import { delPageContent, menuItemGen } from "./helperFuncs";

const pastriesMenuElems = () => {

    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);
    
    const menuHeader = document.createElement('h2');
    menuHeader.id = "pastries_header";
    menuHeader.innerText = "Classics";

    const croissantElem = menuItemGen('croissant', "Croissant", "$4.99", "placeholder");
    const doughnutElem = menuItemGen('doughnut', "Doughnut", "$2.99", "placeholder");
    const puddingElem = menuItemGen('pudding', "Pudding", "$6.99", "placeholder");

    
    const menuHeader2 = document.createElement('h2');
    menuHeader2.id = "pastries_header";
    menuHeader2.innerText = "Specials";

    const parfaitElem = menuItemGen('parfait', "Parfait", "$4.99", "placeholder");
    const tiramisuElem = menuItemGen('tiramisu', "Tiramisu", "$2.99", "placeholder");
    const cakeElem = menuItemGen('cake', "Cake", "$6.99", "placeholder");

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu_container'

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(croissantElem);
    menuContainer.appendChild(doughnutElem);
    menuContainer.appendChild(puddingElem);

    menuContainer.appendChild(menuHeader2);
    menuContainer.appendChild(parfaitElem);
    menuContainer.appendChild(tiramisuElem);
    menuContainer.appendChild(cakeElem);


    contentDiv.appendChild(menuContainer);
}

const pastriesTabClick = () => {
    const pastriesTab = document.getElementById('pastries_tab');

    pastriesTab.addEventListener('click', () => {
        pastriesMenuElems();
    })
}
export { pastriesTabClick };
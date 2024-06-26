import { delPageContent, menuItemGen } from "./helperFuncs";

const pastriesMenuElems = () => {

    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);
    
    const menuHeader = document.createElement('h2');
    menuHeader.id = "pastries_header";
    menuHeader.innerText = "Classics";

    const croissantElem = menuItemGen('croissant', "Croissant", "$4.99", "placeholder", "../src/images/nati-melnychuk-croissant-unsplash.jpg", "Croissant by Nati Melnychuk", "natinati", "Nati Melnychuk");
    const doughnutElem = menuItemGen('doughnut', "Doughnut", "$2.99", "placeholder", "../src/images/nik-doughnut-unsplash.jpg", "Doughnut by Nik", "helloimnik", "Nik");
    const puddingElem = menuItemGen('pudding', "Pudding", "$6.99", "placeholder", "../src/images/matheus-ferrero-pudding-unsplash.jpg", "Pudding by Matheus Ferrero", "matheusferrero", "Matheus Ferrero");

    
    const menuHeader2 = document.createElement('h2');
    menuHeader2.id = "pastries_header";
    menuHeader2.innerText = "Specials";

    const parfaitElem = menuItemGen('parfait', "Parfait", "$4.99", "placeholder", "../src/images/heather-barnes-parfait-unsplash.jpg", "Parfait by Heather Barnes", "heatherbarnes", "Heather Barnes");
    const tiramisuElem = menuItemGen('tiramisu', "Tiramisu", "$2.99", "placeholder", "../src/images/alev-takil-tiramisu-unsplash.jpg", "Tiramisu by Alev Takil", "alevisionco", "Alev Takil");
    const cakeElem = menuItemGen('cake', "Cake", "$6.99", "placeholder", "../src/images/kristiana-pinne-cake-unsplash.jpg", "Cake by Kristiana Pinne", "kristianapinne", "Kristiana Pinne");

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu_container'

    menuContainer.append(
        menuHeader,
        croissantElem,
        doughnutElem,
        puddingElem,
        menuHeader2,
        parfaitElem,
        tiramisuElem,
        cakeElem
    )


    contentDiv.appendChild(menuContainer);
}

const pastriesTabClick = () => {
    const pastriesTab = document.getElementById('pastries_tab');

    pastriesTab.addEventListener('click', () => {
        pastriesMenuElems();
    })
}
export { pastriesTabClick };
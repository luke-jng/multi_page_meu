const pastriesMenuElems = () => {

    const contentDiv = document.getElementById('content');
    while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != "nav_bar") {
        contentDiv.removeChild(contentDiv.lastChild);
    }
    
    const menuHeader = document.createElement('h2');
    menuHeader.id = "pastries_header";
    menuHeader.innerText = "Pastries";

    const croissantElem = document.createElement('div');
    croissantElem.id = "croissant";
    croissantElem.innerText = "Croissant";

    const doughnutElem = document.createElement('div');
    doughnutElem.id = "doughnut";
    doughnutElem.innerText = "Doughnut";

    const puddingElem = document.createElement('div');
    puddingElem.id = "pudding";
    puddingElem.innerText = "Pudding";

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
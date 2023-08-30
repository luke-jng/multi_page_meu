import { delPageContent } from './helperFuncs';
const drinkMenuElems = () => {

    const contentDiv = document.getElementById('content');
    // while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != "nav_bar") {
    //     contentDiv.removeChild(contentDiv.lastChild);
    // }
    delPageContent(contentDiv);
    
    //I suggest putting all the below into a single container div for ease of removal
    const menuHeader = document.createElement('h2');
    menuHeader.id = "drinks_header";
    menuHeader.innerText = "Drinks";

    const greenTeaElem = document.createElement('div');
    greenTeaElem.id = "green_tea";
    greenTeaElem.innerText = "Green Tea";

    const blackTeaElem = document.createElement('div');
    blackTeaElem.id = "black_tea";
    blackTeaElem.innerText = "Black Tea";

    const lemonadeElem = document.createElement('div');
    lemonadeElem.id = "lemonade";
    lemonadeElem.innerText = "Lemonade";

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu_container'

    //update: single container finished
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(greenTeaElem);
    menuContainer.appendChild(blackTeaElem);
    menuContainer.appendChild(lemonadeElem);

    contentDiv.appendChild(menuContainer);
}

const drinkTabClick = () => {
    const drinkTab = document.getElementById('drinks_tab');

    drinkTab.addEventListener('click', () => {
        drinkMenuElems();
    })
}
export { drinkTabClick };
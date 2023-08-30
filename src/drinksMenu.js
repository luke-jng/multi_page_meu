import { delPageContent, menuItemGen } from './helperFuncs';

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

    // greentea Item generation-----------------------------
    // const greenTeaElem = document.createElement('div');
    // greenTeaElem.id = "greentea";

    // const greenTeaHead = document.createElement('div');
    // greenTeaHead.id = 'greentea_head';

    // const greenTeaName = document.createElement('div');
    // greenTeaName.id = 'greentea_name';
    // greenTeaName.innerText = "Green Tea";
    
    // const greenTeaPrice = document.createElement('div');
    // greenTeaPrice.id = "greentea_price";
    // greenTeaPrice.innerText = "$5.99";

    // greenTeaHead.appendChild(greenTeaName);
    // greenTeaHead.appendChild(greenTeaPrice);

    // const greenTeaDescription = document.createElement('p');
    // greenTeaDescription.id = "greentea_description";
    // greenTeaDescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

    // greenTeaElem.appendChild(greenTeaHead);
    // greenTeaElem.appendChild(greenTeaDescription);
    // greentea item generation-------------------------------


    const greenTeaElem = menuItemGen('greentea', "Green Tea", "$5.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    const blackTeaElem = menuItemGen('blacktea', "Black Tea", "$5.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    const lemonadeElem = menuItemGen('lemonade', "Lemonade", "$3.99", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    // const blackTeaElem = document.createElement('div');
    // blackTeaElem.id = "black_tea";
    // blackTeaElem.innerText = "Black Tea";

    // const lemonadeElem = document.createElement('div');
    // lemonadeElem.id = "lemonade";
    // lemonadeElem.innerText = "Lemonade";

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
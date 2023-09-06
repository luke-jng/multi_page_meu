import { delPageContent, menuItemGen } from './helperFuncs';

const drinkMenuElems = () => {

    const contentDiv = document.getElementById('content');
    // while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != "nav_bar") {
    //     contentDiv.removeChild(contentDiv.lastChild);
    // }
    delPageContent(contentDiv);
    
    //I suggest putting all the below into a single container div for ease of removal
    const coldDrinkHeader = document.createElement('h2');
    coldDrinkHeader.id = "drinks_header";
    coldDrinkHeader.innerText = "Cold Drinks";

    const greenTeaElem = menuItemGen('greentea', "Green Tea", "$5.99", "placeholder", "../src/images/akhilesh-sharma-greentea-unsplash.jpg", "Green Tea by Akhilesh Sharma");
    const blackTeaElem = menuItemGen('blacktea', "Black Tea", "$5.99", "placeholder", "../src/images/chi-chen-blacktea-unsplash.jpg", "Black Tea by Chi Chen");
    const lemonadeElem = menuItemGen('lemonade', "Lemonade", "$3.99", "placeholder", "../src/images/jake-charles-lemonade-unsplash.jpg", "Lemonade by Jake Charles");

    const hotDrinkHeader = document.createElement('h2');
    hotDrinkHeader.id = 'drinks_header2';
    hotDrinkHeader.innerText = "Hot Drinks";

    const coffeeElem = menuItemGen('coffee', "Coffee", "$4.99", "placeholder", "../src/images/nathan-dumlao-coffee-unsplash.jpg", "Coffee by Nathan Dumlao")
    const latteElem = menuItemGen('latte', "Latte", "$7.99", "placeholder", "../src/images/nathan-dumlao-latte-unsplash.jpg", "Latte by Nathan Dumlao")
    const cappucinoElem = menuItemGen('cappucino', "Cappucino", "$6.99", "placeholder", "../src/images/harris-vo-cappucinno-unsplash.jpg", "Cappucino by Harris Vo")


    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu_container';

    // const menuContainer2 = document.createElement('div');
    // menuContainer2.id = 'menu_container';

    //update: single container finished
    menuContainer.appendChild(coldDrinkHeader);
    menuContainer.appendChild(greenTeaElem);
    menuContainer.appendChild(blackTeaElem);
    menuContainer.appendChild(lemonadeElem);

    menuContainer.appendChild(hotDrinkHeader);
    menuContainer.appendChild(coffeeElem);
    menuContainer.appendChild(latteElem);
    menuContainer.appendChild(cappucinoElem);

    // menuContainer2.appendChild(hotDrinkHeader);
    // menuContainer2.appendChild(coffeeElem);
    // menuContainer2.appendChild(latteElem);
    // menuContainer2.appendChild(cappucinoElem);

    contentDiv.appendChild(menuContainer);
    // contentDiv.appendChild(menuContainer2);
}

const drinkTabClick = () => {
    const drinkTab = document.getElementById('drinks_tab');

    drinkTab.addEventListener('click', () => {
        drinkMenuElems();
    })
}
export { drinkTabClick };
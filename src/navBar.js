import { homeContentElems } from "./home";

const navBar = () => {
    const contentDiv = document.getElementById('content');

    //insert navbar html into html here
    const navElem = document.createElement('nav');
    navElem.id = "nav_bar";

    const navLogo = document.createElement('div');
    navLogo.id = "nav_logo";
    navLogo.innerText = "SomeCafe"


    const unorderedListElem = document.createElement('ul');

    const listItemHome = document.createElement('li');
    listItemHome.id = 'home_tab';
    listItemHome.innerText = 'Home';

    const listItemDrinks = document.createElement('li');
    listItemDrinks.id = 'drinks_tab';
    listItemDrinks.innerText = "Drinks";

    const listItemPastries = document.createElement('li');
    listItemPastries.id = 'pastries_tab';
    listItemPastries.innerText = "Pastries";

    const listItemAboutUs = document.createElement('li');
    listItemAboutUs.id = 'contactus_tab';
    listItemAboutUs.innerText = "Contact"

    //append list items into the unorderd list
    unorderedListElem.appendChild(listItemHome);
    unorderedListElem.appendChild(listItemDrinks);
    unorderedListElem.appendChild(listItemPastries);
    unorderedListElem.appendChild(listItemAboutUs);


    //append logo into nav element
    navElem.appendChild(navLogo);
    //append the unordered list into nav element
    navElem.appendChild(unorderedListElem);

    //append the nav element into the content div
    contentDiv.appendChild(navElem);

};

const logoClick = () => {
    const logoTab = document.getElementById('nav_logo');

    logoTab.addEventListener('click', () => {
        homeContentElems();
    })
}

export { navBar, logoClick }
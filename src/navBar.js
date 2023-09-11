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
    listItemAboutUs.id = 'aboutus_tab';
    listItemAboutUs.innerHTML = "About&nbsp;Us"

    const listItemContactUs = document.createElement('li');
    listItemContactUs.id = 'contactus_tab';
    listItemContactUs.innerText = "Contact"

    //append list items into the unorderd list
    unorderedListElem.appendChild(listItemHome);
    unorderedListElem.appendChild(listItemDrinks);
    unorderedListElem.appendChild(listItemPastries);
    unorderedListElem.appendChild(listItemAboutUs);
    unorderedListElem.appendChild(listItemContactUs);



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

const tabClickLightUp = () => {
    const tabArr = ['home_tab', 'drinks_tab', 'pastries_tab','aboutus_tab', 'contactus_tab'];

    document.getElementById(tabArr[0]).style.color = 'lightgreen';
    tabArr.forEach((tab) => {
        const currTab = document.getElementById(tab);
        currTab.addEventListener('click', () => {
            currTab.style.color = 'lightgreen';
            for (let i = 0; i < tabArr.length;  i++) {
                if (tabArr[i] != tab) {
                    document.getElementById(tabArr[i]).style.color = 'white';
                }
            }
        })
    })
}

export { navBar, logoClick, tabClickLightUp }
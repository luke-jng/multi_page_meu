import { homeContentElems } from "./home";

const genListItem = (idName, innertxt) => {
    const listItem = document.createElement('li');
    listItem.id = idName;
    listItem.innerText = innertxt;
    return listItem;
}

const navBar = () => {
    const contentDiv = document.getElementById('content');

    //insert navbar html into html here
    const navElem = document.createElement('nav');
    navElem.id = "nav_bar";
    //create logo elem
    const navLogo = document.createElement('div');
    navLogo.id = "nav_logo";
    navLogo.innerText = "SomeCafe"

    //create nav unordered list
    const unorderedListElem = document.createElement('ul');
    //create nav list items
    const listItemHome = genListItem('home_tab', 'Home');
    const listItemDrinks = genListItem('drinks_tab', 'Drinks');
    const listItemPastries = genListItem('pastries_tab', 'Pastries');
    const listItemContactUs = genListItem('contactus_tab', 'Contact');
    const listItemAboutUs = document.createElement('li');
    listItemAboutUs.id = 'aboutus_tab';
    listItemAboutUs.innerHTML = "About&nbsp;Us"

    //append list items into the unorderd list
    unorderedListElem.append(listItemHome,listItemDrinks,listItemPastries,listItemAboutUs,listItemContactUs);

    //append logo and unordered list into nav element
    navElem.append(navLogo, unorderedListElem);

    //append the nav element into the content div
    contentDiv.appendChild(navElem);
};

const logoClick = () => {
    const logoTab = document.getElementById('nav_logo');

    logoTab.addEventListener('click', () => {
        homeContentElems();

        const tabArr = ['drinks_tab', 'pastries_tab','aboutus_tab', 'contactus_tab'];
        for (let i = 0; i < tabArr.length;  i++) {
            document.getElementById(tabArr[i]).style.color = '';
        }
        document.getElementById('home_tab').style.color = 'lightgreen';
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
                    document.getElementById(tabArr[i]).style.color = '';
                }
            }
        })
    })
}

export { navBar, logoClick, tabClickLightUp }
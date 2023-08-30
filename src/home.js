import { delPageContent } from "./helperFuncs";

const homeContentElems = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);


    const homeContainer = document.createElement('div');
    homeContainer.id = "home_container";

    const homeHeader = document.createElement('h2');
    homeHeader.id = 'home_header';
    homeHeader.innerText = 'Welcome to Some Cafe!'

    const homeMotto = document.createElement('div');
    homeMotto.id = 'home_motto';
    homeMotto.innerText = 'Some Motto and Some Catchphrase'

    const homeDescription = document.createElement('p');
    homeDescription.id = 'home_description';
    homeDescription.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    homeContainer.appendChild(homeHeader);
    homeContainer.appendChild(homeMotto);
    homeContainer.appendChild(homeDescription);

    contentDiv.appendChild(homeContainer);
}

const homeTabClick = () => {
    const homeTab = document.getElementById('home_tab');

    homeTab.addEventListener('click', ()=> {
        homeContentElems();
    });
}

export { homeContentElems, homeTabClick }
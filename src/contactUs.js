import { delPageContent } from "./helperFuncs";

const contactElems = () => {
    const contentDiv = document.getElementById('content');
    // while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != "nav_bar") {
    //     contentDiv.removeChild(contentDiv.lastChild);
    // }
    delPageContent(contentDiv);

    const contactContainer = document.createElement('div');
    contactContainer.id = "contact_container";

    const contactHeader = document.createElement('h2');
    contactHeader.id = "contactus_header";
    contactHeader.innerText = "Contact Us";

    const contactOne = document.createElement('div');
    contactOne.id = "contact_one";
    contactOne.innerText = "Phone: (111)222-3333"

    const contactTwo = document.createElement('div');
    contactTwo.id = "contact_two";
    contactTwo.innerText = "Email: SomeEmail@realemail.com"

    const contactThree = document.createElement('div');
    contactThree.id = "contact_three";
    contactThree.innerText = "Fax: (555)666-7777"

    const businessHours = document.createElement('div');
    businessHours.id = "business_hours";
    businessHours.innerText = "Mon - Sat : 7 AM - 5 PM"

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactOne);
    contactContainer.appendChild(contactTwo);
    contactContainer.appendChild(contactThree);
    contactContainer.appendChild(businessHours);

    contentDiv.appendChild(contactContainer);
}

const contactUsTabClick = () => {
    const contactUsTab = document.getElementById('contactus_tab');

    contactUsTab.addEventListener('click', ()=> {
        contactElems();
    })
}

export { contactUsTabClick }
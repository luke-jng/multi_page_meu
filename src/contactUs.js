import { delPageContent } from "./helperFuncs";

const genLineBreak = () => document.createElement('br');
const contactElems = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);

    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = "contactpage_container";

    //-------------------------------------------------

    const feedbackHeader = document.createElement('h2');
    feedbackHeader.id = "feedback_header";
    feedbackHeader.innerText = "We'd love to hear about your experience!"

    const feedbackFormElem = document.createElement('div');
    feedbackFormElem.id = 'feedback_form_container';

    const feedbackForm = document.createElement('form');
    feedbackForm.id = 'feedback_form';

    const feedbackNameInputLabel = document.createElement('label');
    feedbackNameInputLabel.setAttribute('for', 'form_inputname');
    feedbackNameInputLabel.innerText = "Name";


    const feedbackNameInput = document.createElement('input');
    feedbackNameInput.setAttribute('id', 'form_inputname');
    feedbackNameInput.setAttribute('name', 'form_inputname')
    feedbackNameInput.setAttribute('type', 'text');
    feedbackNameInput.setAttribute('placeholder', 'Your name...');

    const feedbackEmailInputLabel = document.createElement('label');
    feedbackEmailInputLabel.setAttribute('for', 'form_inputemail');
    feedbackEmailInputLabel.innerText = "Email";

    const feedbackEmailInput = document.createElement('input');
    feedbackEmailInput.setAttribute('id', 'form_inputemail');
    feedbackEmailInput.setAttribute('name', 'form_inputemail');
    feedbackEmailInput.setAttribute('type', 'text');
    feedbackEmailInput.setAttribute('placeholder', 'Your email...');

    const feedbackTextAreaLabel = document.createElement('label');
    feedbackTextAreaLabel.setAttribute('for', 'form_inputtext');
    feedbackTextAreaLabel.innerText = "Feedback";

    const feedbackTextArea = document.createElement('textarea');
    feedbackTextArea.setAttribute('id', 'form_inputtext')
    feedbackTextArea.setAttribute('name', 'form_inputtext')
    feedbackTextArea.setAttribute('rows', "5");
    feedbackTextArea.setAttribute('cols', "26");
    feedbackTextArea.setAttribute('placeholder', "Your feedback...")

    const feedbackSubmit = document.createElement('button');
    feedbackSubmit.id = 'feedback_submit';
    feedbackSubmit.setAttribute('form','feedback_form');
    feedbackSubmit.innerText = 'Send'

    feedbackForm.append(
        feedbackNameInputLabel,
        genLineBreak(),
        feedbackNameInput,
        genLineBreak(),
        feedbackEmailInputLabel,
        genLineBreak(),
        feedbackEmailInput,
        genLineBreak(),
        feedbackTextAreaLabel,
        genLineBreak(),
        feedbackTextArea,
    );

    feedbackFormElem.append(
        feedbackForm,
        feedbackSubmit
    );

    //--------------------------------------------------
    const contactHeader = document.createElement('h2');
    contactHeader.id = "contactsupport_header";
    contactHeader.innerText = "For other inquiries, you can reach us in the following ways!";

    //--------------------------------------------------
    const contactPhoneElem = document.createElement('div');
    contactPhoneElem.id = "contactsupportphone";

    const contactPhoneName = document.createElement('div');
    contactPhoneName.id = 'contactsupportphone_name';
    contactPhoneName.innerText = 'Phone:';

    const contactPhoneNumber = document.createElement('div');
    contactPhoneNumber.id = 'contactsupportphone_number'
    contactPhoneNumber.innerText = "(000) 111-2222";

    contactPhoneElem.appendChild(contactPhoneName);
    contactPhoneElem.appendChild(contactPhoneNumber);
    //--------------------------------------------------

    const contactEmailElem = document.createElement('div');
    contactEmailElem.id = "contactsupportemail";

    const contactEmailName = document.createElement('div')
    contactEmailName.id = 'contactsupportemail_name';
    contactEmailName.innerText = 'Email:';

    const contactEmailAddr = document.createElement('div');
    contactEmailAddr.id = 'contactsupportemail_addr'
    contactEmailAddr.innerText = "support@somecafe.com";

    contactEmailElem.appendChild(contactEmailName);
    contactEmailElem.appendChild(contactEmailAddr);

    //--------------------------------------------------
    const locationHeader = document.createElement('h2');
    locationHeader.id = "location_header"
    locationHeader.innerText = 'Come visit us!'

    const locationAddressElem = document.createElement('div');
    locationAddressElem.id = "locationaddress"

    const locationAddressHead = document.createElement('div');
    locationAddressHead.id = 'locationaddress_head'
    locationAddressHead.innerText = 'Location'

    const locationAddressDesc = document.createElement('div');
    locationAddressDesc.id = 'locationaddress_desc'
    locationAddressDesc.innerText = '1301 6th Ave, New York, NY 10019'

    const locationAddressMap = document.createElement('div')
    locationAddressMap.id = 'locationaddress_map';
    locationAddressMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617541157572!2d-73.98823932276575!3d40.74844047138831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1693603759857!5m2!1sen!2sus" width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    locationAddressElem.append(
        locationAddressHead,
        locationAddressDesc,
        locationAddressMap
    )

    //business hours doesn't need a header

    const businessHoursElem = document.createElement('div');
    businessHoursElem.id = 'businesshours'

    const businessHoursHead = document.createElement('div');
    businessHoursHead.id = "businesshours_head";
    businessHoursHead.innerText = "Business Hours"

    const businessHourDesc1 = document.createElement('div');
    businessHourDesc1.id = 'businesshours_desc1';

    const businessHourDescDays1 = document.createElement('div');
    businessHourDescDays1.id = 'businesshours_desc_days1';
    businessHourDescDays1.innerText = 'Mon - Sat :';

    const businessHourDescTime1 = document.createElement('div');
    businessHourDescTime1.id = 'businesshours_desc_time1';
    businessHourDescTime1.innerText = '7 AM - 5 PM';

    businessHourDesc1.append(
        businessHourDescDays1,
        businessHourDescTime1
    );

    const businessHourDesc2 = document.createElement('div');
    businessHourDesc2.id = 'businesshours_desc2';

    const businessHourDescDays2 = document.createElement('div');
    businessHourDescDays2.id = 'businesshours_desc_days2';
    businessHourDescDays2.innerText = 'Sun :';

    const businessHourDescTime2 = document.createElement('div');
    businessHourDescTime2.id = 'businesshours_desc_time2';
    businessHourDescTime2.innerText = 'Closed';

    businessHourDesc2.append(
        businessHourDescDays2,
        businessHourDescTime2
    )

    businessHoursElem.append(
        businessHoursHead,
        businessHourDesc1,
        businessHourDesc2
    )

    //----------------------------------------------
    contactPageContainer.append(
        feedbackHeader,
        feedbackFormElem,
        contactHeader,
        contactPhoneElem,
        contactEmailElem,
        locationHeader,
        locationAddressElem,
        businessHoursElem
    )

    contentDiv.appendChild(contactPageContainer);
}

const contactUsTabClick = () => {
    const contactUsTab = document.getElementById('contactus_tab');

    contactUsTab.addEventListener('click', ()=> {
        contactElems();
    })
}

export { contactUsTabClick }
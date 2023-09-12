import { delPageContent } from "./helperFuncs";

const genLineBreak = () => document.createElement('br');

const genFormInput = (inputId, inputName, inputType, placeholder) => {
    const formInput = document.createElement('input');
    formInput.setAttribute('id', inputId);
    formInput.setAttribute('name', inputName);
    formInput.setAttribute('type', inputType);
    formInput.setAttribute('placeholder', placeholder);
    return formInput;
}

const genElemnText = (tag, idName, innerTxt) => {
    const newElem = document.createElement(tag);
    newElem.id = idName;
    newElem.innerText = innerTxt;
    return newElem;
}

const contactElems = () => {
    const contentDiv = document.getElementById('content');
    delPageContent(contentDiv);

    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = "contactpage_container";

    //-------------------------------------------------
    const feedbackHeader = genElemnText('h2', 'feedback_header', "We'd love to hear about your experience!");

    const feedbackFormElem = genElemnText('div', 'feedback_form_container', '');

    const feedbackForm = genElemnText('form', 'feedback_form', '');

    const feedbackNameInputLabel = genElemnText('label', 'form_name_label', 'Name');
    feedbackNameInputLabel.setAttribute('for', 'form_inputname');

    const feedbackNameInput = genFormInput('form_inputname', 'form_inputname', 'text', 'Your name...');

    const feedbackEmailInputLabel = genElemnText('label', 'form_email_label', 'Email');
    feedbackEmailInputLabel.setAttribute('for', 'form_inputemail');

    const feedbackEmailInput = genFormInput('form_inputemail', 'form_inputemail', 'text', 'Your email...');

    const feedbackTextAreaLabel = genElemnText('label', 'form_inputtext_label', 'Feedback');
    feedbackTextAreaLabel.setAttribute('for', 'form_inputtext');

    const feedbackTextArea = document.createElement('textarea');
    feedbackTextArea.setAttribute('id', 'form_inputtext')
    feedbackTextArea.setAttribute('name', 'form_inputtext')
    feedbackTextArea.setAttribute('rows', "5");
    feedbackTextArea.setAttribute('cols', "26");
    feedbackTextArea.setAttribute('placeholder', "Your feedback...")

    const feedbackSubmit = genElemnText('button', 'feedback_submit', 'Send');
    feedbackSubmit.setAttribute('form','feedback_form');

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
    const contactHeader = genElemnText('h2', 'contactsupport_header', 'For other inquiries, you can reach us in the following ways!');

    //--------------------------------------------------
    const contactPhoneElem = genElemnText('div', "contactsupportphone", '');

    const contactPhoneName = genElemnText('div', 'contactsupportphone_name', 'Phone:')

    const contactPhoneNumber = genElemnText('div', 'contactsupportphone_number', '(000) 111-2222');

    contactPhoneElem.append(contactPhoneName, contactPhoneNumber);
    //--------------------------------------------------

    const contactEmailElem = genElemnText('div', 'contactsupportemail', '');
    
    const contactEmailName = genElemnText('div', 'contactsupportemail_name', 'Email:');
    
    const contactEmailAddr = genElemnText('div', 'contactsupportemail_addr', "support@somecafe.com");

    contactEmailElem.append(contactEmailName, contactEmailAddr);

    //--------------------------------------------------
    const locationHeader = genElemnText('h2', 'location_header', 'Come visit us!');

    const locationAddressElem = genElemnText('div', 'locationaddress', '');

    const locationAddressHead = genElemnText('div', 'locationaddress_head', 'Location');

    const locationAddressDesc = genElemnText('div', 'locationaddress_desc', '1301 6th Ave, New York, NY 10019');

    const locationAddressMap = document.createElement('div')
    locationAddressMap.id = 'locationaddress_map';
    locationAddressMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617541157572!2d-73.98823932276575!3d40.74844047138831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1693603759857!5m2!1sen!2sus" width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    locationAddressElem.append(
        locationAddressHead,
        locationAddressDesc,
        locationAddressMap
    )

    //business hours doesn't need a header
    const businessHoursElem = genElemnText('div', 'businesshours', '');

    const businessHoursHead = genElemnText('div', 'businesshours_head', 'Business Hours');

    const businessHourDesc1 = genElemnText('div', 'businesshours_desc1', '');

    const businessHourDescDays1 = genElemnText('div', 'businesshours_desc_days1', 'Mon - Sat :');

    const businessHourDescTime1 = genElemnText('div', 'businesshours_desc_time1', '7 AM - 5 PM');

    businessHourDesc1.append(
        businessHourDescDays1,
        businessHourDescTime1
    );

    const businessHourDesc2 = genElemnText('div', 'businesshours_desc2', '');

    const businessHourDescDays2 = genElemnText('div', 'businesshours_desc_days2', 'Sun :');

    const businessHourDescTime2 = genElemnText('div', 'businesshours_desc_time2', 'Closed');

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
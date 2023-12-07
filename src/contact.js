export default function createContactTab(){
    const contactDiv = document.createElement('div');
    const head = document.createElement('h1');
    const contactInfo = document.createElement('h3');
    const contactHours = document.createElement('div');
    const location = document.createElement('img');

    contactDiv.classList.add('page-info');
    head.textContent = 'Contact Us';
    head.classList.add('head-elements');

    contactInfo.innerHTML = '<u>+1 780 564 0912</u> </br></br> ENQUIRIES@HOTELURBAN.CA <hr>';

    contactHours.innerHTML = '<u>Opening Hours:</u> </br> Monday - Thursday 12pm - 11pm </br> Friday & Saturday 12pm - 12am </br> Sunday 12pm - 10.30pm </br></br> <u>Kitchen Hours:</u> <br> Lunch 12pm - 3pm (12.30pm - 4pm Saturday & Sunday) <br> Dinner 6pm - 10pm (6pm - 9pm Sunday) <hr>';

    

    contactDiv.appendChild(head);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(contactHours);
    contactDiv.appendChild(location);

    return contactDiv;
}
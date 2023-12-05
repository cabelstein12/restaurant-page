export default function createContactTab(){
    const contactDiv = document.createElement('div');
    const head = document.createElement('h1');
    
    head.textContent = 'Contact Us';
    head.classList.add('head-elements')
    contactDiv.appendChild(head);

    return contactDiv;
}
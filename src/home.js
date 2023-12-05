export default function createHomeTab(){
    const homeDiv = document.createElement('div');
    const head = document.createElement('h1');
    const body = document.createElement('p');
    
    head.classList.add('head-elements');
    head.textContent = 'Welcome to Hotel Urban';
    body.textContent = 'Discover the exquisite flavors from the Harbour. We take pride in combining fresh ingredients with a wonderful dining experience.'
    homeDiv.appendChild(head);
    homeDiv.appendChild(body);

    return homeDiv;
}


import './style.css';
import Icon from './paul-griffin-WWST6E8LxeE-unsplash.jpg';
import createContactTab from './contact';
import createMenuTab from './menu';
import createHomeTab from './home';

function component(){
    const contentDiv = document.getElementById("content");

    function switchToContact(){
        contentDiv.innerHTML = '';
        const contactTab = createContactTab();
        contentDiv.appendChild(contactTab);
    }

    function switchToMenu(){
        contentDiv.innerHTML = '';
        const menuTab = createMenuTab();
        contentDiv.appendChild(menuTab);
    }

    function switchToHome(){
        contentDiv.innerHTML = '';
        const homeTab = createHomeTab()
        contentDiv.appendChild(homeTab);
    }

    const homeTabElement = document.getElementById('home-tab');
    const contactTabElement = document.getElementById('contact-tab');
    const menuTabElement = document.getElementById('menu-tab');

    homeTabElement.addEventListener('click', switchToHome)
    contactTabElement.addEventListener('click', switchToContact);
    menuTabElement.addEventListener('click', switchToMenu);

    // const image = new Image();
    // image.src = Icon;

    // content.appendChild(image);

    return contentDiv;
}

document.body.appendChild(component());

console.log('out');
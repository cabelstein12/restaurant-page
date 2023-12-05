import './style.css';
import Icon from './paul-griffin-WWST6E8LxeE-unsplash.jpg';
import createContactTab from './contact';
import createMenuTab from './menu';
import createHomeTab from './home';

function component(){
    const contentDiv = document.getElementById("content");


    function switchToHome(){
        contentDiv.innerHTML = '';
        const homeTab = createHomeTab()
        contentDiv.appendChild(homeTab);
    }
    function switchToMenu(){
        contentDiv.innerHTML = '';
        const menuTab = createMenuTab();
        contentDiv.appendChild(menuTab);
    }
    function switchToContact(){
        contentDiv.innerHTML = '';
        const contactTab = createContactTab();
        contentDiv.appendChild(contactTab);
    }
    
    const homeTabElement = document.getElementById('home-tab');
    const menuTabElement = document.getElementById('menu-tab');
    const contactTabElement = document.getElementById('contact-tab');

    homeTabElement.addEventListener('click', switchToHome)
    menuTabElement.addEventListener('click', switchToMenu);
    contactTabElement.addEventListener('click', switchToContact);

    // const image = new Image();
    // image.src = Icon;

    // content.appendChild(image);
    switchToHome();

    return contentDiv;
}

document.body.appendChild(component());

console.log('out');
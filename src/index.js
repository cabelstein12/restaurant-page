import './style.css';
import createContactTab from './contact';
import createMenuTab from './menu';
import createHomeTab from './home';

function component(){
    const contentDiv = document.getElementById("content");

    function addTabContent(tabName) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(tabName);
    }

    function switchToHome(){
        const homeTab = createHomeTab()
        addTabContent(homeTab);
    }
    function switchToMenu(){
        const menuTab = createMenuTab();
        addTabContent(menuTab);
    }
    function switchToContact(){
        const contactTab = createContactTab();
        addTabContent(contactTab);
    }

    function addFadeInAnimation(){
        const contentChild = document.querySelector('.page-info');
        contentChild.classList.add('fadeInAnimation');
        const duration = 2000;
        setTimeout(()=> {
        contentChild.classList.remove('fadeInAnimation');
        }, duration)
    }

    function switchToTab(tabFunction){
        contentDiv.innerHTML = '';
        const tab = tabFunction;
        contentDiv.appendChild(tab);
        addFadeInAnimation();
    }
    
    const homeTabElement = document.getElementById('home-tab');
    const menuTabElement = document.getElementById('menu-tab');
    const contactTabElement = document.getElementById('contact-tab');

    homeTabElement.addEventListener('click', switchToHome);
    menuTabElement.addEventListener('click', switchToMenu);
    contactTabElement.addEventListener('click', switchToContact);

    homeTabElement.addEventListener('click', addFadeInAnimation);
    menuTabElement.addEventListener('click', addFadeInAnimation);
    contactTabElement.addEventListener('click', addFadeInAnimation);


    switchToHome();

    return contentDiv;
}

document.body.appendChild(component());

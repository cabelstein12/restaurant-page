export default function createMenuTab(){
    const menuDiv = document.createElement('div');
    const head = document.createElement('h1');

    menuDiv.classList.add('page-info');
    head.textContent = 'Current Menu';
    head.classList.add('head-elements');
    menuDiv.appendChild(head);
    
    return menuDiv;
}
import './style.css';
import Icon from './paul-griffin-WWST6E8LxeE-unsplash.jpg'

function component(){
    const content = document.getElementById("content");

    const image = new Image();
    image.src = Icon;

    // content.appendChild(image);

    return content;
}

document.body.appendChild(component());

console.log('out');
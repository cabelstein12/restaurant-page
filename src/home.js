import ImageOne from "../src/urban-gyllstrom-MaWMfm-HCqQ-unsplash.jpg";
// import ImageTwo from "../src/taylor-grote-UxhIU5f5GN4-unsplash.jpg";

export default function createHomeTab(){
    const homeDiv = document.createElement('div');
    const head = document.createElement('h1');
    const body = document.createElement('p');
    const imageBar = document.createElement('div');
    const firstImg = new Image();
    // const secondImg = new Image();
    
    homeDiv.classList.add('page-info');
    head.classList.add('head-elements');
    head.textContent = 'Hotel Urban';
    body.textContent = 'Discover the exquisite flavors from the Harbour. We take pride in combining fresh ingredients with a wonderful dining experience.'
    
    imageBar.classList.add('img-bar')
    firstImg.src = ImageOne;
    // secondImg.src = ImageTwo;
    firstImg.classList.add('pic-one');
    // secondImg.classList.add('pic-two');
    
    imageBar.appendChild(firstImg);
    // imageBar.appendChild(secondImg);

    homeDiv.appendChild(head);
    homeDiv.appendChild(body);
    homeDiv.append(imageBar);


    return homeDiv;
}


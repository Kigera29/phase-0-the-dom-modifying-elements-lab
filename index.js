
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}
const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "YOUR-NAME"; 
newHeader.innerHTML = `${yourName} is the champion`;

document.body.appendChild(newHeader);

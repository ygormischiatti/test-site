//Image switcher
let myImage = document.querySelector('img');

myImage.onclick = function() { 
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cybersecurity.png') {
        myImage.setAttribute('src','images/cybersecurity2.png');
    } else {
        myImage.setAttribute('src','images/cybersecurity.png');
    }
}

//Personalized wellcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor, digite o seu nome.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Cybersecurity é legal, ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cybersecurity é legal, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}
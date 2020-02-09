let myImage = document.querySelector('img');

myImage.onclick = function() { 
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cybersecurity.png') {
        myImage.setAttribute('src','images/cybersecurity2.png');
    } else {
        myImage.setAttribute('src','images/cybersecurity.png');
    }
}
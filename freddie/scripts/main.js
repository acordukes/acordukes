var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/freddie1.png') {
      myImage.setAttribute ('src','images/freddie2.png');
    } 
    else {
      myImage.setAttribute ('src','images/freddie1.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi ' + myName + ', this is Freddie the Cockapoo!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi ' + storedName + ', this is Freddie the Cockapoo!';
}

myButton.onclick = function() {
  setUserName();
}
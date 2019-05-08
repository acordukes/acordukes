var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');



/* Looping through images */

for(var i = 1; i <= 10; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/hiroshima/hiroshima' + i + '.png');
	thumbBar.appendChild(newImage);
	newImage.onclick = function(e) {
		var imgSrc = e.target.getAttribute('src');
		displayImage(imgSrc);
	}
}
function displayImage(imgSrc) {
	displayedImage.setAttribute('src', imgSrc);
}
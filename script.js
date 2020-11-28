var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
	"images/bg1.png",
	"images/bg2.png",
	"images/bg3.png",
	"images/bg4.png",
	"images/bg5.png",
	);

let i = 1;
next.onclick = function(){
	if (i==backgroundImg.length){
		i = 0;
		hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
		thumbnail[0].classList.add("active");
		thumbnail[backgroundImg.length-1].classList.remove("active");
		i++;
		return;
	}
	if (i<backgroundImg.length && i>0) {
		hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
		thumbnail[i].classList.add("active");
		thumbnail[i-1].classList.remove("active");
		i++;
	}
}
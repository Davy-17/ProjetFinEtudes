/*function cliqueMenu(){
    document.getElementById("menu").classList.toggle("menuOuvert");
    document.getElementById("menu").classList.toggle("bgOuvert");
}*/
const menu = document.getElementById('menu');
const bgMenu = document.getElementById('bgMenu');
const burger = document.getElementById('burger');

menu.onclick = function(){
        menu.classList.toggle('menuOuvert');
        menu.classList.toggle('bgOuvert');
}

/*
document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'burger' && clickEvent.target.id !== 'menu'){
        menu.classList.remove('menuOuvert');
        menu.classList.remove('bgOuvert');
    }
}*/


document.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 0){
    header.classList.add("scroller");
}else{
    header.classList.remove("scroller");
}


}
);
/*

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "images/ae.png";
images[1] = "images/Ai.png";
images[2] = "images/c4d.png";
images[3] = "images/realflow.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
*/

/*slider*/
var slides=document.querySelector('.slider-items').children;
var slideDroite=document.querySelector(".slideDroite");
var slideGauche=document.querySelector(".slideGauche");
var totalSlides=slides.length;
var index=0;

slideDroite.onclick=function () {
	next("droite");
}
slideGauche.onclick=function () {
	next("gauche");
}

function next(direction){
/* quand tu cliques à droite l'index augmente et est remis à zéro pour avoir la première slide */
  if(direction=="droite"){

	/*Index augmente de 1*/
	 index++;

		/*L'index se remet à zéro une fois qu'on DÉPASSE la dernière slide (dernier index), on revient à la première slide */
	  if(index==totalSlides){
	   index=0;
	  }
  } 

/*Si cliques à gauche */
  else{
	
	/*et que la slide est la première, on revient à la dernière slide */
		  if(index==0){
		   index=totalSlides-1;
		  }
		  /* l'index dimnue de 1 */
		  else{
		   index--;
		  }
   }
/*boucle des slides */
 for(i=0; i<slides.length; i++){
		 slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

 console.log(index);
}



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
var slides=document.querySelector('.slider-items').children;/*toutes les slides */
var slideDroite=document.querySelector(".slideDroite");/*div avec la class slideDroite*/
var slideGauche=document.querySelector(".slideGauche");/*div avec la class slideGauche*/
var totalSlides=slides.length;/*6 slides*/
var index=0;/*index commence à 0 */


/*Quand on clique sur les div (fleche) avec les class slideGauche ou slideDroite */
slideDroite.onclick=function () {
	fleche("droite"); /*parametre droite*/
}
slideGauche.onclick=function () {
	fleche("gauche"); /*parametre gauche*/
}

function fleche(direction){

/* quand tu cliques la flèche droite l'index augmente et est remis à zéro pour avoir la première slide */
  if(direction=="droite"){

	/*Index augmente de 1*/
	 index++;

		/*Ensuite, L'index se remet à zéro une fois qu'on DÉPASSE la dernière SLIDE, donc on revient à la première slide */
		/*Si index=6 on revient à 0 */ /* Index de 0 à 5 pour 6 slides */
	  if(index==totalSlides){
	   index=0;
	  }
  } 



/*Si cliques flèche gauche */
  else{
	
	/*6-1 = index 5, donc on revient à la dernière slide (index de 5) */
	/*SI quand tu cliques, l'index est de 0, on revient à la dernière slide */
		  if(index==0){
		   index=totalSlides-1;
		  }
		  /* sinon l'index dimnue de 1 */
		  else{
		   index--;
		  }
   }


/*boucle des slides, les slides n'ont pas de class par défault d'activé */
 for(i=0; i<slides.length; i++){

	/*enleve la class active */
		 slides[i].classList.remove("active");
 }

 /*quand on est sur l'index, on ajoute la class active */
 slides[index].classList.add("active");     

 console.log(index);
}



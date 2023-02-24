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
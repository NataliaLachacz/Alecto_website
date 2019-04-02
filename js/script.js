//scroll top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

//menu
let icon = document.querySelector("#icon__nav");
let menu = document.querySelector("#newMenu");

const dropMenu = function() {
	icon.style.display = "none";
	menu.style.display = "grid";
}

const dropOutMenu = function() {
	menu.style.display = "none";
	icon.style.display = "block";
};

icon.addEventListener("click", dropMenu);
menu.addEventListener("click", dropOutMenu);
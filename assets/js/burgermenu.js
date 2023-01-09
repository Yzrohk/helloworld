"use strict";

var btnBurgermenu = document.querySelector(".btn__burgermenu");
var listeSvgBurgermenu = document.querySelectorAll(".svg__burgermenu");
var menuListe = document.querySelector(".menu__liste");

btnBurgermenu.addEventListener("click", activateBurgermenu);

function activateBurgermenu() {
    listeSvgBurgermenu.forEach(svg => {
        if(svg.classList.contains("svg--active")) {
            svg.classList.toggle("svg--inactive");
            svg.classList.toggle("svg--active");
        }
        else if (svg.classList.contains("svg--inactive")) {
            svg.classList.toggle("svg--active");
            svg.classList.toggle("svg--inactive");
        }
    });

    menuListe.classList.toggle("menu__liste--active")

}
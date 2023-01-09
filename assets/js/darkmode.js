"use strict";

var btnDarkmode = document.querySelector(".btn__darkmode");
var listeSvgDarkmode = document.querySelectorAll(".svg__darkmode");
var main = document.querySelector(".main");
var header = document.querySelector(".header");
var footer = document.querySelector(".footer");

btnDarkmode.addEventListener("click", applyDarkmode);

if (localStorage.getItem("darkmode") == "nuit") {
    applyDarkmode();
}

function applyDarkmode() {
    listeSvgDarkmode.forEach(svg => {
        if(svg.classList.contains("svg--active")) {
            svg.classList.toggle("svg--inactive");
            svg.classList.toggle("svg--active");
        }
        else if (svg.classList.contains("svg--inactive")) {
            svg.classList.toggle("svg--active");
            svg.classList.toggle("svg--inactive");
        }
    });
    document.body.classList.toggle("darkmode");
    main.classList.toggle("darkmode");
    header.classList.toggle("darkmode");
    footer.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", "nuit");
    }
    else{
        localStorage.setItem("darkmode", "jour");
    }
}
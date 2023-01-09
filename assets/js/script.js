'use strict';
var btn = document.querySelector(".btn");
var citationTexte = document.querySelector(".citation__texte");
var citationAuteur = document.querySelector(".citation__auteur");

var tabTexte = ["L\'imagination est plus importante que le savoir.",
    "Un problème sans solution est un problème mal posé",
    "Qui veut la paix prépare la guerre",
    "Un gagnant est un rêveur",
    "Quand on veut on peut, quand on peut on doit",
    "La vie est un mystère qu\'il faut vivre, et non un problème à résoudre"];
var tabAuteur = ["Albert Einstein",
    "Albert Einstein",
    "Jules César",
    "Nelson Mandela",
    "Napoléon Bonaparte",
    "Gandhi"];

var nbDefault = getRandomIntInclusive(0, tabTexte.length);
citationAuteur.innerHTML = tabAuteur[nbDefault];
citationTexte.innerHTML = "\«" + tabTexte[nbDefault] + "\»";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1));
}

btn.addEventListener("click", randomCitation);

function randomCitation() {
    var nb = getRandomIntInclusive(0, tabTexte.length);
    citationAuteur.innerHTML = tabAuteur[nb];
    citationTexte.innerHTML = "\«" + tabTexte[nb] + "\»";
}
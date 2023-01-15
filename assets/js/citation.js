'use strict';
var btn = document.querySelector(".btn");
var citationTexte = document.querySelector(".citation__texte");
var citationAuteur = document.querySelector(".citation__auteur");

var tabTexte = ["L\'imagination est plus importante que le savoir.",
    "Un problème sans solution est un problème mal posé.",
    "Qui veut la paix prépare la guerre.",
    "Un gagnant est un rêveur.",
    "Quand on veut on peut, quand on peut on doit.",
    "La vie est un mystère qu\'il faut vivre, et non un problème à résoudre.",
    "Dans la vie on ne fait pas ce que l\'on veut mais on est responsable de ce que l\'on est.",
    "L\'éducation, c\'est la famille qui la donne ; l\'instruction, c\'est l\'Etat qui la doit.",
    "Je crois ce que je dis, je fais ce que je crois.",
    "On parle toujours mal quand on n\'a rien à dire.",
    "Plus l\'espérance est grande, plus la déception est violente.",
    "Ce n\'est pas le doute, c\'est la certitude qui rend fou."];
var tabAuteur = ["Albert Einstein",
    "Albert Einstein",
    "Jules César",
    "Nelson Mandela",
    "Napoléon Bonaparte",
    "Gandhi",
    "Jean-Paul Sartre",
    "Victor Hugo",
    "Victor Hugo",
    "Voltaire",
    "Franz-Olivier Giesbert",
    "Friedrich Nietzsche"];

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
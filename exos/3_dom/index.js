"use strict";

// # 4_DOM

const createSection = (exoNumber) => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.setAttribute("id", `exo${exoNumber}`);
  body.appendChild(section);

  return section;
};

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ["blue", "red", "green", "black", "grey", "orange", "purple"];

const parent = document.querySelector("#exo1");

colors.forEach((color) => {
  const colorBlock = document.createElement("div");
  colorBlock.textContent = color;

  colorBlock.style.backgroundColor = color; // Wrong way to do
  colorBlock.addEventListener("click", () => console.log(color));

  parent.appendChild(colorBlock);
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

const section2 = createSection(2);

const squareDiv = document.createElement("div");
squareDiv.style.backgroundColor = "black";
squareDiv.style.width = "100px";
squareDiv.style.height = "100px";

section2.appendChild(squareDiv);

squareDiv.addEventListener("mousemove", function (e) {
  this.style.width = `${e.clientX}px`;
  this.style.height = `${e.clientY}px`;
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ["Harry", "Hermione", "Ron", "Sirius", "Hagrid", "Albus"];

const section3 = createSection(3);

const createNameBlock = (nameIndex) => {
  const nameBlock = document.createElement("div");

  nameBlock.textContent = names[nameIndex];
  nameBlock.classList.add(names[nameIndex]);
  section3.appendChild(nameBlock);

  nameBlock.addEventListener("click", function () {
    nameBlock.remove();
    createNameBlock(Math.floor(Math.random() * names.length));
  });
};

createNameBlock(0);

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const section4 = createSection(4);

const trackButtonText = {
  on: "Tracking On",
  off: "Tracking Off",
};

const trackButton = document.createElement("button");
trackButton.textContent = trackButtonText.off;
let isButtonActive = false;

const trackingFigures = document.createElement("span");

const trackingFunction = (event) => {
  console.log(event.clientX, event.clientY);
  trackingFigures.textContent = `${event.clientX}px, ${event.clientY}px`;
};

trackButton.addEventListener("click", function () {
  if (isButtonActive) {
    document.removeEventListener("mousemove", trackingFunction);
    this.textContent = trackButtonText.off;
    trackingFigures.remove();
  } else {
    document.addEventListener("mousemove", trackingFunction);
    this.textContent = trackButtonText.on;
    section4.appendChild(trackingFigures);
  }

  isButtonActive = !isButtonActive;
});

section4.appendChild(trackButton);

// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const section5 = createSection(5);

const dragDiv = document.createElement("div");
dragDiv.textContent = "Drag me";
dragDiv.style.backgroundColor = "black";
dragDiv.style.width = "100px";
dragDiv.style.height = "100px";

const drag = (e) => {
  dragDiv.style.left = `${e.clientX - 50}px`;
  dragDiv.style.top = `${e.clientY - 50}px`;
};

dragDiv.addEventListener("mousedown", () => {
  dragDiv.style.position = "absolute";
  dragDiv.addEventListener("mousemove", drag);
});
dragDiv.addEventListener("mouseup", (e) => {
  dragDiv.removeEventListener("mousemove", drag);
});

section5.appendChild(dragDiv);

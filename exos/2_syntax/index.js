'use strict';

// # 2-1_Syntax

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre

const x = 10;

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()
console.log('X', x);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/

function x10(x) {
  return x * 10;
}
console.log('X10', x10(x));

console.log('--- Question 4 ---');
/* [4] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/
function random(n) {
  return Math.floor(Math.random() * n);
}
console.log('Random', random(x));

console.log('--- Question 5 ---');
/* [5] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];
nombres.forEach(function (nombre, index) {
  console.log('Nombre', nombre, index);
});

console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

const pairs = nombres.filter(function (nombre) {
  return nombre % 2 === 0;
});

console.log('Pairs', pairs);

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/
const plusGrandQue100 = nombres.filter(function (nombre) {
  return nombre > 100;
});
console.log('> 100', plusGrandQue100);

console.log('--- Question 8 ---');
/* [8] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/
const nombresX10 = nombres.map(function (nombre) {
  return nombre * 10;
});
console.log('N x 10', nombresX10);

console.log('--- Question 9 ---');
/* [9] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];
couleurs.forEach(function (couleur) {
  console.log(couleur, couleur.length);
});

console.log('--- Question 10 ---');
/* [10] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

const longueurs = couleurs.map(longueur);
console.log('Longueurs', longueurs);

console.log('--- Question 11 ---');
// [11] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string
function longueur(s) {
  return s.length;
}

console.log('--- Question 12 ---');
// [12] reprendre le code de la question 10 mais en utilisant la fonction "longueur"

console.log('--- Question 13 ---');
// [13] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push({
  nom: 'Christophe',
  date: '1978-11-01',
});
personnes.push({
  nom: 'Alice',
  date: '1988-11-01',
});

console.log('personnes', personnes);

console.log('--- Question 14 ---');
// [14] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

const noms = personnes.map(function (personne) {
  return personne.nom;
});

console.log('noms', noms);

console.log('--- Question 15 ---');
/* [15] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

function calculerAge(s) {
  const date = new Date(s).getTime();
  const now = Date.now();

  const ageEnAnnees = (now - date) / 1000 / 60 / 60 / 24 / 365.25;

  return Math.floor(ageEnAnnees);
}

calculerAge(personnes[0].date);

console.log('--- Question 16 ---');
// [16] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges

const ages = personnes.map(function (personne) {
  return calculerAge(personne.date);
});

console.log('ages', ages);

// 1. Exo1
//     - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
let mot = prompt("Entrez un mot");

//     - Déclenchez un deuxieme prompt avec comme question "Entrez la lettre du mot que vous voulez retirer" et stockez la réponse dans une variable
let lettre = prompt("Entrez la lettre du mot que vous voulez retirer");
mot = mot.replace(lettre, "");

//     - Affichez le mot sans la lettre choisie
console.log(mot);

// 2. Exo 2
//     - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
let mot2 = prompt('Entrez un mot');

//     - stockez la longueur max du mot dans une variable
let long = mot2.length;

//     - Retirez une lettre aléatoire
let random = Math.round(Math.rancom() * long);

//     - Affichez le mot sans la lettre choisie
mot2 = mot2.replace(mot2.charAt(random), "");
console.log(mot2);

// 3. Exo 3
//     - Déclenchez un premier prompt avec comme question "Entrez votre prénom" et stockez la réponse dans une variable
let prenom = prompt('Entrez votre prenom').toLowerCase();

//     - Déclenchez un premier prompt avec comme question "Entrez votre nom" et stockez la réponse dans une variable
let nom = prompt('Entrez votre nom');

//     - Déclenchez un premier prompt avec comme question "Entrez votre age" et stockez la réponse dans une variable
let age = parseInt(prompt('Entrez votre age'));

//     - Déclenchez un premier prompt avec comme question "Entrez votre taille" (1m75) et stockez la réponse dans une variable
let taille = prompt('Entrez votre taille ex:1.70');

//     - Affichez votre nom avec 2 lettres en majuscules (ex: AndrE)
nom = nom.charAt(0).toUpperCase() + nom.substr(1).replace(nom.substr(-1), nom.substr(-1).toUpperCase());

//     - Affichez la première lettre de votre prénom en majuscule, le reste en minuscule et 
console.log(nom);
prenom = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();
console.log(prenom);

// retire deux lettres au hasard (ex: Guereio)
let prenom2 = prenom.replace(prenom.charAt(Math.round(Math.random()* prenom.length)), "");

let prenom2 = prenom2.replace(prenom2.charAt(Math.round(Math.random()* prenom2.length)), "");
console.log(prenom2);

//     - Affichez le nombre d'années de votre age en mois (ex: 24 ans == 288 mois)
let ageMois = age * 12;
console.log(ageMois);

//     - Affichez votre taille en cm (ex: 175 cm)
let taille2 = taille.replace('m', "");
console.log(`${taille2} cm`);

//     - Affichez une phrase qui contennant touts votres données (ex: Bonjour PrImO Niola, ton prénom comporte 7 lettres mais malheureusement j'ai eu un petit creux et il te manque 2 lettres, tu es agée de 348 mois, concernant ta taille elle est de 175 cm)
let end = `Bonjour ${prenom} ${nom}, ton prénom comporte ${prenom.length} lettres mais malheureusement j'ai eu un petit creux et il te manque ${prenom.length - prenom2.length} lettres, tu es agée de ${ageMois} mois, concernant ta taille elle est de ${taille2} cm`;
console.log(end);
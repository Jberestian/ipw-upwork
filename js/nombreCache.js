let nombreCache;
let nbreCoupsJoues = 0;
const nbreCoupsMax = 10;
const borneMin = 0;
const borneMax = 100;

window.onload = function () {
  debuterPartie();

  document.getElementById("jouerBtn").onclick = jouer;
  document.getElementById("finPartieBtn").onclick = abandonner;

  // Ajouter un gestionnaire d'événement pour la touche "Entrée"
  document
    .getElementById("prop")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Empêcher le comportement par défaut (si nécessaire)
        jouer(); // Appeler la fonction "jouer" lorsque l'utilisateur appuie sur Entrée
      }
    });
};

// Démarre une nouvelle partie
function debuterPartie() {
  // Réinitialiser les variables
  nombreCache =
    Math.floor(Math.random() * (borneMax - borneMin + 1)) + borneMin;
  nbreCoupsJoues = 0;

  // Mettre à jour l'interface utilisateur
  document.getElementById("message").textContent =
    "Nouvelle partie commencée ! Faites une proposition.";
  document.getElementById("prop").value = "";
  document.getElementById("prop").focus();
  document.getElementById("partieEncours").style.display = "block";
}

// Gestion de la logique de jeu
function jouer() {
  const inputProp = document.getElementById("prop").value;
  const guess = parseInt(inputProp);

  // Valider l'entrée utilisateur
  if (isNaN(guess) || guess < borneMin || guess > borneMax) {
    document.getElementById(
      "message"
    ).textContent = `Veuillez entrer un nombre valide entre ${borneMin} et ${borneMax}.`;
    return;
  }

  nbreCoupsJoues++;

  // Vérifier si la proposition est correcte
  if (guess < nombreCache) {
    document.getElementById("message").textContent =
      "Trop petit. Essayez encore !";
  } else if (guess > nombreCache) {
    document.getElementById("message").textContent =
      "Trop grand. Essayez encore !";
  } else {
    document.getElementById(
      "message"
    ).textContent = `Bravo ! Vous avez trouvé le nombre caché en ${nbreCoupsJoues} essais.`;
    terminerPartie();
    return;
  }

  // Vérifier si le joueur a atteint le nombre maximum d'essais
  if (nbreCoupsJoues >= nbreCoupsMax) {
    document.getElementById(
      "message"
    ).textContent = `Vous avez perdu. Le nombre caché était ${nombreCache}.`;
    terminerPartie();
  }
}

// Abandonner la partie
function abandonner() {
  document.getElementById(
    "message"
  ).textContent = `Partie abandonnée. Le nombre caché était ${nombreCache}.`;
  terminerPartie();
}

function terminerPartie() {
  // Hide gameplay buttons
  document.getElementById("jouerBtn").style.display = "none";
  document.getElementById("finPartieBtn").style.display = "none";

  // Show "Rejouer" button
  const rejouerBtn = document.getElementById("rejouerBtn");
  rejouerBtn.style.display = "inline-block";

  // Handle "Rejouer" button click
  rejouerBtn.onclick = function () {
    rejouerBtn.style.display = "none";
    document.getElementById("jouerBtn").style.display = "inline-block";
    document.getElementById("finPartieBtn").style.display = "inline-block";
    debuterPartie();
  };
}

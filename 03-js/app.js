/* =========================================================================
   MAILLON 3 — JAVASCRIPT : l'interface
   Les données arrivent du maillon Java, dans donnees.js :
     PILOTES = [{nom, ecurie, points, victoires}, ...]
     ECURIES = [{nom, points, victoires}, ...]
   Complétez les trois fonctions, puis ouvrez index.html dans le navigateur.
   ========================================================================= */

// 1. trierParPoints(liste) : renvoie une NOUVELLE liste triée par points
//    DÉCROISSANTS. La liste reçue ne doit pas être modifiée.
//    À points égaux, celui qui a le plus de victoires passe devant.
function trierParPoints(liste) {
  return liste.slice().sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return b.victoires - a.victoires;
  });
}

// 2. remplirTableau(idCorps, liste) : remplit le <tbody> dont l'id est fourni.
//    Une ligne <tr> par entrée, avec dans l'ordre les cellules <td> :
//      rang (1, 2, 3...) | nom | écurie (chaîne vide si absente) | points | victoires
//    Chaque <tr> porte l'attribut data-nom. Un nouvel appel REMPLACE le contenu.
function remplirTableau(idCorps, liste) {
  const corps = document.getElementById(idCorps);
  corps.innerHTML = ""; 
  liste.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-nom", item.nom);
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nom}</td>
      <td>${item.ecurie || ""}</td>
      <td>${item.points}</td>
      <td>${item.victoires}</td>
    `;
    corps.appendChild(tr);
  });
}

// 3. marquerPodium(idCorps) : ajoute la classe CSS "podium" aux TROIS PREMIÈRES
//    lignes du tableau, et la retire de toutes les autres.
function marquerPodium(idCorps) {
  const corps = document.getElementById(idCorps);
  const lignes = corps.querySelectorAll("tr");
  lignes.forEach((ligne, index) => {
    if (index < 3) {
      ligne.classList.add("podium");
    } else {
      ligne.classList.remove("podium");
    }
  });
}

/* --- FOURNI — NE PAS MODIFIER : affichage de la saison ------------------- */
function afficherSaison() {
  if (typeof PILOTES === "undefined") {
    return;
  }
  remplirTableau("corps-pilotes", trierParPoints(PILOTES));
  marquerPodium("corps-pilotes");
  remplirTableau("corps-ecuries", trierParPoints(ECURIES));
  marquerPodium("corps-ecuries");
}

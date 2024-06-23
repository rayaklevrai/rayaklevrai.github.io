function afficherHeure() {
    const maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    // Formatage pour afficher deux chiffres (01, 02, etc.)
    heures = (heures < 10 ? "0" : "") + heures;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    secondes = (secondes < 10 ? "0" : "") + secondes;

    const heureString = heures + ":" + minutes + ":" + secondes;
    document.getElementById("horloge").textContent = heureString;
}

// Mettre à jour l'heure toutes les secondes
setInterval(afficherHeure, 1000);

const cercle = document.getElementById('monCercle');

if (cercle) {
  document.addEventListener('mousemove', (event) => {
    cercle.style.left = event.clientX - 25 + 'px'; 
    cercle.style.top = event.clientY - 25 + 'px';  
  });
} else {
  console.error("L'élément avec l'ID 'monCercle' n'a pas été trouvé.");
}

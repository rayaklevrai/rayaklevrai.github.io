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

const cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

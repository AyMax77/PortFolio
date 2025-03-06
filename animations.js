function downloadCV() {
    // Crée un lien pour télécharger le CV
    var link = document.createElement('a');
    link.href = '/image/CV.pdf'; // Remplace par le chemin réel de ton CV
    link.download = 'CV';
    link.click();
}
function openOverlay(title, description, link) {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Définir l'image spécifique à chaque projet
    var images = {
        'GeoWorld': 'image/Geoworld.avif',   // Remplace par le chemin réel de ton image
        'API_Serie': 'image/series.jpg',       // Remplace par le chemin réel de ton image
        'Sushi_API': 'image/sushi_API.avif',       // Remplace par le chemin réel de ton image
        'API_Eurocoasters': 'image/eurocoasters.jpg',// Remplace par le chemin réel de ton image
        'Savon_API': 'image/savon.jpg',       // Remplace par le chemin réel de ton image
        'Kotlin_Aventure': 'image/Bootstrap.png'  // Remplace par le chemin réel de ton image
    };

    // Affiche l'overlay noir
    overlay.style.display = 'block';

    // Attendre 500ms avant de faire apparaître la modale avec animation
    setTimeout(() => {
        // Définir le contenu de la modale
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-link').onclick = function() {
            window.open(link, '_blank');
        };

        // Définir l'image pour ce projet spécifique
        var imgSrc = images[title] || 'default-image.jpg'; // Utilise une image par défaut si pas d'image spécifique
        document.querySelector('.modal img').src = imgSrc;

        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translate(-50%, -50%) translateY(0)'; // Animation d'apparition
        }, 50);
    }, 200);
}

function closeModal() {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Animation de disparition de la modale
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) translateY(-50px)'; 

    // Après l'animation, on cache totalement la modale
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

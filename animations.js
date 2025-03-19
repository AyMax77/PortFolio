function openCV() {
    // Ouvre le CV dans une nouvelle fenêtre ou un nouvel onglet
    window.open('/image/CV.pdf', '_blank');
}
function openOverlay(title, description, link) {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Définir l'image spécifique à chaque projet
    var images = {
        'GeoWorld': 'image/Geoworld.avif',   // Remplace par le chemin réel de ton image
        'API_Serie': 'image/series.jpg',       // Remplace par le chemin réel de ton image
        'Sushi_API': 'image/Sushi_API.avif',       // Remplace par le chemin réel de ton image
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
class VoitureF1 {
    constructor(pilote) {
        this.pilote = pilote;
        this.essence = 100;
        this.usurePneus = 0;
        this.tourActuel = 0;
    }

    tour() {
        this.essence -= Math.floor(Math.random() * (5 - 3 + 1)) + 3;
        this.usurePneus += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        this.tourActuel++;
    }

    afficherEtat() {
        return `${this.pilote} - Essence: ${this.essence}%, Usure pneus: ${this.usurePneus}%`;
    }
}

function simulerCourse() {
    let voiture = new VoitureF1("Max Verstappen");
    let output = document.getElementById("output");
    let voitureElement = document.getElementById("voiture");

    output.innerHTML = "";
    let angle = 0;

    function animerTour(tour) {
        if (tour < 10) {
            voiture.tour();
            let p = document.createElement("p");
            p.textContent = voiture.afficherEtat();
            output.appendChild(p);

            // Animation de la voiture autour du circuit
            angle += 36; // 360° divisé par 10 tours
            let x = 80 * Math.cos(angle * Math.PI / 180);
            let y = 80 * Math.sin(angle * Math.PI / 180);
            voitureElement.style.transform = `translate(${x}px, ${y}px)`;

            setTimeout(() => animerTour(tour + 1), 1000);
        }
    }

    animerTour(0);
}

    // Fonction pour vérifier si un élément est visible à l'écran
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

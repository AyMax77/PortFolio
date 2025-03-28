// Fonction améliorée pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Considérer un élément visible quand il est au moins à 20% visible
    return (
        rect.top <= windowHeight * 0.8 &&
        rect.bottom >= windowHeight * 0.2
    );
}

// Animation plus progressive des sections
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.section-background, .veille-section');
    sections.forEach((section, index) => {
        if (isElementInViewport(section)) {
            // Ajouter un délai progressif pour chaque section
            setTimeout(() => {
                section.classList.add('section-visible');
            }, 100 * index);
        }
    });
}

// Animation des blocs et cartes avec délai progressif
function animateCardsAndBlocks() {
    // Sélectionner tous les éléments à animer
    const cards = document.querySelectorAll('.tech-card, .simulateur-card');
    const blocs = document.querySelectorAll('.bloc, .bloc2');
    const competences = document.querySelectorAll('.competence');
    
    // Animer les cartes
    cards.forEach((card, index) => {
        if (isElementInViewport(card) && !card.classList.contains('card-visible')) {
            setTimeout(() => {
                card.classList.add('card-visible');
            }, 100 * index);
        }
    });
    
    // Animer les blocs
    blocs.forEach((bloc, index) => {
        if (isElementInViewport(bloc) && !bloc.classList.contains('bloc-visible')) {
            setTimeout(() => {
                bloc.classList.add('bloc-visible');
            }, 100 * index);
        }
    });
    
    // Animer les compétences
    competences.forEach((competence, index) => {
        if (isElementInViewport(competence) && !competence.classList.contains('competence-visible')) {
            setTimeout(() => {
                competence.classList.add('competence-visible');
            }, 100 * index);
        }
    });
}

// Animation améliorée pour la timeline
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (isElementInViewport(item) && !item.classList.contains('timeline-item-visible')) {
            setTimeout(() => {
                item.classList.add('timeline-item-visible');
            }, 200 * index); // Délai plus important pour un effet séquentiel plus visible
        }
    });
}

// Animation des éléments de veille technologique
function animateVeilleTech() {
    const veilleElements = document.querySelectorAll('.veille-intro, .veille-technologies, .veille-ia, .veille-supercalculateurs, .veille-simulations, .veille-collaborations, .veille-defis, .veille-conclusion, .veille-ressources, .veille-simulateurs, .veille-impact');
    
    veilleElements.forEach((element, index) => {
        if (isElementInViewport(element) && !element.classList.contains('veille-visible')) {
            setTimeout(() => {
                element.classList.add('veille-visible');
            }, 150 * index);
        }
    });
}

// Animation des éléments de coordonnées
function animateCoordonnees() {
    const coordonneeItems = document.querySelectorAll('.coordonnee-item');
    
    coordonneeItems.forEach((item, index) => {
        if (isElementInViewport(item) && !item.classList.contains('coordonnee-visible')) {
            setTimeout(() => {
                item.classList.add('coordonnee-visible');
            }, 150 * index);
        }
    });
}

// Animation d'entrée pour le chargement initial de la page
function initialAnimations() {
    // Animation de la navbar
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Déclencher toutes les animations initiales
    setTimeout(() => {
        handleScrollAnimations();
        animateTimeline();
        animateCardsAndBlocks();
        animateVeilleTech();
        animateCoordonnees();
    }, 500);
}

// Amélioration de l'animation d'ouverture du modal
function openOverlay(title, description, link) {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Définir l'image spécifique à chaque projet
    var images = {
        'GeoWorld': 'image/Geoworld.avif',
        'API_Serie': 'image/series.jpg',
        'Sushi_API': 'image/savon.jpg',
        'API_Eurocoasters': 'image/eurocoasters.jpg',
        'Savon_API': 'image/savon.jpg',
        'Kotlin_Aventure': 'image/KOTLIN.webp'
    };

    // Affiche l'overlay noir avec animation
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.opacity = '1';
        overlay.style.transition = 'opacity 0.3s ease-out';
    }, 10);

    // Attendre avant de faire apparaître la modale avec animation
    setTimeout(() => {
        // Définir le contenu de la modale
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-link').onclick = function() {
            window.open(link, '_blank');
        };

        // Définir l'image pour ce projet spécifique
        var imgSrc = images[title] || 'image/default-image.jpg';
        document.querySelector('.modal img').src = imgSrc;

        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translate(-50%, -50%) translateY(0)';
        }, 50);
    }, 200);
}

// Amélioration de l'animation de fermeture du modal
function closeModal() {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Animation de disparition de la modale
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) translateY(-30px)';
    
    // Animation de disparition de l'overlay
    overlay.style.opacity = '0';

    // Après l'animation, on cache totalement la modale et l'overlay
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// Écouteurs d'événements
window.addEventListener('DOMContentLoaded', initialAnimations);
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    animateTimeline();
    animateCardsAndBlocks();
    animateVeilleTech();
    animateCoordonnees();
});

// Conserver les fonctions existantes
function openCV() {
    window.open('https://aymax77.github.io/PortFolio/image/Dehay_Maxime.pdf', '_blank');
}

// Classe VoitureF1 pour la simulation
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
// Fonction pour ajouter des classes aux blocs de projets
function setupProjectBlocks() {
    // Sélectionner tous les blocs de projets
    const projectBlocks = document.querySelectorAll('.bloc');
    
    // Ajouter les classes spécifiques pour chaque bloc
    projectBlocks.forEach(block => {
        const projectName = block.textContent.trim();
        block.classList.add(`bloc-${projectName}`);
    });
}

// Amélioration de la fonction openOverlay
function openOverlay(title, description, link) {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('myModal');

    // Définir l'image spécifique à chaque projet avec des dimensions standardisées
    const images = {
        'GeoWorld': {
            src: 'image/Geoworld.avif',
            alt: 'Interface de GeoWorld montrant une carte du monde interactive'
        },
        'API_Serie': {
            src: 'image/series.jpg',
            alt: 'Application de séries TV avec interface moderne'
        },
        'Sushi_API': {
            src: 'image/Sushi_API.avif',
            alt: 'Interface de commande de sushi en ligne'
        },
        'API_Eurocoasters': {
            src: 'image/eurocoasters.jpg',
            alt: 'Application pour explorer les montagnes russes en Europe'
        },
        'Savon_API': {
            src: 'image/savon.jpg',
            alt: 'Calculateur de recettes de savon artisanal'
        },
        'Kotlin_Aventure': {
            src: 'image/KOTLIN.webp',
            alt: 'Jeu d\'aventure développé en Kotlin'
        }
    };

    // Créer un conteneur pour l'image si non existant
    let imgContainer = modal.querySelector('.modal-image-container');
    if (!imgContainer) {
        imgContainer = document.createElement('div');
        imgContainer.className = 'modal-image-container';
        const modalImg = modal.querySelector('img');
        if (modalImg) {
            modalImg.remove();
            const newImg = document.createElement('img');
            imgContainer.appendChild(newImg);
            modal.insertBefore(imgContainer, modal.firstChild);
        }
    }

    // Affiche l'overlay noir avec animation
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);

    // Attendre avant de faire apparaître la modale avec animation
    setTimeout(() => {
        // Définir le contenu de la modale
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-link').onclick = function() {
            window.open(link, '_blank');
        };

        // Définir l'image pour ce projet spécifique
        const imgData = images[title] || { src: 'image/default-image.jpg', alt: 'Image du projet' };
        const modalImg = imgContainer.querySelector('img') || modal.querySelector('img');
        if (modalImg) {
            modalImg.src = imgData.src;
            modalImg.alt = imgData.alt;
        }

        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translate(-50%, -50%) translateY(0)';
        }, 50);
    }, 200);
}

// Initialiser la configuration des blocs de projets au chargement
document.addEventListener('DOMContentLoaded', function() {
    setupProjectBlocks();
});
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

// Fonction pour gérer l'affichage des animations
function handleScroll() {
    const veilleSection = document.getElementById('Veille');
    if (isElementInViewport(veilleSection)) {
        veilleSection.classList.add('visible');
        // Désactiver l'écouteur après avoir déclenché l'animation
        window.removeEventListener('scroll', handleScroll);
    }
}

// Écouter l'événement de scroll
window.addEventListener('scroll', handleScroll);

// Déclencher une première vérification au chargement de la page
handleScroll();
// Fonction pour animer la timeline
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 300); // Délai entre chaque élément
        }
    });
}

// Écouter l'événement de scroll pour la timeline
window.addEventListener('scroll', animateTimeline);

// Déclencher une première vérification au chargement de la page
animateTimeline();

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

// Fonction pour gérer les animations des sections
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.section-background, .veille-section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('section-visible');
        }
    });
}

// Écouter l'événement de scroll
window.addEventListener('scroll', handleScrollAnimations);

// Déclencher une première vérification au chargement de la page
handleScrollAnimations();

// Fonction pour animer les cartes et les blocs
function animateCardsAndBlocks() {
    const cards = document.querySelectorAll('.tech-card, .simulateur-card, .bloc, .bloc2, .competence img');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('card-visible', 'bloc-visible', 'competence-visible');
        }
    });
}

// Écouter l'événement de scroll pour les cartes et les blocs
window.addEventListener('scroll', animateCardsAndBlocks);

// Déclencher une première vérification au chargement de la page
animateCardsAndBlocks();

// Fonction pour animer la timeline
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
            setTimeout(() => {
                item.classList.add('timeline-item-visible');
            }, index * 300); // Délai entre chaque élément
        }
    });
}

function openTab(tabName) {
    // Cache tous les contenus d'onglets
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    
    // Désactive tous les onglets
    const navTabs = document.getElementsByClassName("nav-tab");
    for (let i = 0; i < navTabs.length; i++) {
        navTabs[i].classList.remove("active");
    }
    
    // Active l'onglet sélectionné
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}


// Écouter l'événement de scroll pour la timeline
window.addEventListener('scroll', animateTimeline);


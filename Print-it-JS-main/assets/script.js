document.addEventListener("DOMContentLoaded", function () {
    // Ce code attend que toute la page soit bien chargée avant de démarrer

    const slides = [ // Voici une liste avec toutes les images et les textes du diaporama
        {
            image: "slide1.jpg",
            tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" // Texte affiché avec un effet de style
        },
        {
            image: "slide2.jpg",
            tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            image: "slide3.jpg",
            tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            image: "slide4.png",
            tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentIndex = 0; // On commence avec la première image (celle à la position 0)

    // On va chercher dans la page les éléments utiles : les flèches, l’image, le texte, et les petits points
    const leftArrow = document.querySelector(".arrow_left"); // La flèche pour aller à gauche
    const rightArrow = document.querySelector(".arrow_right"); // La flèche pour aller à droite
    const bannerImage = document.querySelector(".banner-img"); // L’image principale du diaporama
    const bannerText = document.querySelector("#banner-text"); // Le texte qui s'affiche avec l’image
    const dotsContainer = document.querySelector(".dots"); // Le conteneur pour les petits points sous le diaporama

// Quand on clique sur la flèche de gauche
leftArrow.addEventListener("click", () => {
    currentIndex--; // On recule d’une image
    if (currentIndex < 0) currentIndex = slides.length - 1; // Si on est avant la première, on revient à la dernière
    updateBanner(currentIndex); // On met à jour l’image, le texte et les points
});

// Quand on clique sur la flèche de droite
rightArrow.addEventListener("click", () => {
    currentIndex++; // On avance d’une image
    if (currentIndex >= slides.length) currentIndex = 0; // Si on dépasse la dernière, on revient à la première
    updateBanner(currentIndex); // On met à jour l’image, le texte et les points
});


    // Ici, on crée un petit point (dot) pour chaque image
    slides.forEach((slide, i) => {
        const dot = document.createElement("span"); // On crée un nouvel élément <span> (c’est ce qui fera le point)
        dot.className = "dot" + (i === 0 ? " dot_selected" : ""); // On ajoute une classe spéciale si c’est le premier point (pour le mettre en surbrillance)
        dotsContainer.appendChild(dot); // On ajoute ce point dans le conteneur sous le diaporama
    });

    // Cette fonction permet de mettre à jour l’image, le texte et les points sélectionnés
    const updateBanner = (index) => {
        bannerImage.src = `./assets/images/slideshow/${slides[index].image}`; // On change l’image selon l’index choisi
        bannerText.innerHTML = slides[index].tagLine; // On change le texte qui s’affiche

        const allDots = document.querySelectorAll(".dot"); // On récupère tous les petits points
        allDots.forEach(dot => dot.classList.remove("dot_selected")); // On retire la sélection sur tous les points
        allDots[index].classList.add("dot_selected"); // On met en surbrillance le point correspondant à l’image affichée
    };


});

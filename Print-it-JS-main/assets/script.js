document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            image: "slide1.jpg",
            tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
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

    let currentIndex = 0;

    const leftArrow = document.querySelector(".arrow_left");
    const rightArrow = document.querySelector(".arrow_right");
    const bannerImage = document.querySelector(".banner-img");
    const bannerText = document.querySelector("#banner-text");
    const dotsContainer = document.querySelector(".dots");

    // Création des bullet points
    slides.forEach((slide, i) => {
        const dot = document.createElement("span");
        dot.className = "dot" + (i === 0 ? " dot_selected" : "");
        dotsContainer.appendChild(dot);
    });

    const updateBanner = (index) => {
        bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
        bannerText.innerHTML = slides[index].tagLine;

        const allDots = document.querySelectorAll(".dot");
        allDots.forEach(dot => dot.classList.remove("dot_selected"));
        allDots[index].classList.add("dot_selected");
    };

    // Navigation avec les flèches
    leftArrow.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        updateBanner(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateBanner(currentIndex);
    });
});

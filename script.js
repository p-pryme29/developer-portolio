// ==============================
// MOBILE NAVIGATION
// ==============================

const navbar = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-links a");


// Close navigation after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Navigation link clicked:", link.textContent);

    });

});


// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const footer = document.querySelector(".footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Web Developer Portfolio. All rights reserved.`;

}


// ==============================
// CONTACT BUTTON
// ==============================

const contactButton = document.querySelector(".contact .primary-button");

if (contactButton) {

    contactButton.addEventListener("click", () => {

        console.log("Contact button clicked");

    });

}


// ==============================
// PROJECT CARD INTERACTION
// ==============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.cursor = "pointer";

    });

});


// ==============================
// WELCOME MESSAGE
// ==============================

console.log("Developer portfolio loaded successfully!");
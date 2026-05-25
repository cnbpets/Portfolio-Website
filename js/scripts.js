// Random Button Highlighter
function pickRandomItem(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

const gallerySection = document.querySelector(".gallery");
const galleryBtn = document.getElementById("galleryBtn");

if (gallerySection && galleryBtn) {
    const galleryFigures = gallerySection.querySelectorAll("figure");

    galleryBtn.addEventListener("click", () => {

        galleryFigures.forEach(fig => fig.classList.remove("highlight"));

        let randomFig = pickRandomItem(galleryFigures);
        randomFig.classList.add("highlight");
    });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let errors = [];

        if (name === "") {
            errors.push("Name is required.");
        }

        if (email === "" || !email.includes("@")) {
            errors.push("Valid email is required.");
        }

        if (message === "") {
            errors.push("Message cannot be empty.");
        }

        if (errors.length > 0) {
            feedback.textContent = errors.join(" ");
           feedback.style.color = "red"; 
        } else {
            feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
            feedback.style.color = "green";

            contactForm.reset();
        }
    });
}
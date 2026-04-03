function scrollToForm() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
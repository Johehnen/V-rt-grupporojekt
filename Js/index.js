document.addEventListener("DOMContentLoaded", function () {
    const minaSidor = document.getElementById("minaSidorLink");
    const dropdown = document.getElementById("userDropdown");
    const loginLink = document.getElementById("loginLink");
    const kontaktForm = document.getElementById("kontakt");
    const contactLink = document.querySelector(".ruta3");

    const isLoggedIn = localStorage.getItem("LoggedIn") === "true";

    if (isLoggedIn) {
        minaSidor.style.display = "inline";
        loginLink.style.display = "none";
    } else {
        minaSidor.style.display = "none";
        loginLink.style.display = "inline";
    }

    minaSidor.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target) && !minaSidor.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    // ---- NYA förbättrade Contact-hantering ----
    if (contactLink && kontaktForm) {
        kontaktForm.style.display = "none"; // Göm formuläret från början

        contactLink.addEventListener("click", function (e) {
            e.preventDefault(); // förhindra att sidan hoppar
            if (kontaktForm.style.display === "none") {
                kontaktForm.style.display = "block"; // Visa formuläret
                kontaktForm.scrollIntoView({ behavior: 'smooth' }); // Scrolla dit
            } else {
                kontaktForm.style.display = "none"; // Göm formuläret
            }
        });
    }
});

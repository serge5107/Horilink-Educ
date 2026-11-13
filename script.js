const navLinks = document.querySelector(".nav-links");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

// Un seul élément FAQ ouvert à la fois pour faciliter la lecture.
document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-list details").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

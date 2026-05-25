const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

openMenu.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

/* soft 3D scroll reveal */
const revealItems = document.querySelectorAll(
  ".featured, .content-section, .text-page, .aloka-section"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(item => {
  item.classList.add("reveal");
  observer.observe(item);
});

/* subtle hero parallax */
window.addEventListener("scroll", () => {
  const heroImg = document.querySelector(".hero img");
  const y = window.scrollY * 0.18;
  if (heroImg) heroImg.style.transform = `scale(1.04) translateY(${y}px)`;
});
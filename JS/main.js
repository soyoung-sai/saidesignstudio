const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

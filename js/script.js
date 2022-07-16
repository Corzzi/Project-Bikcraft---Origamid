// Menu nav */

const btn = document.querySelector('div[class="menu-mobile"]');
btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

/* Budget - URL */

const parameters = new URLSearchParams(location.search);

function ativeProduct(parameter) {
  const element = document.getElementById(parameter);
  element.checked = true;
  console.log(element);
}

parameters.forEach(ativeProduct);

/* F.A.Q */

const questionElements = document.querySelectorAll(".questions button");
questionElements.forEach((element) => {
  element.addEventListener("click", showDl);
});

function showDl(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const ddElement = document.getElementById(controls);

  ddElement.classList.toggle("active-question");
  const active = ddElement.classList.contains("active-question");
  question.setAttribute("aria-expanded", active);
}

/* Simple anime */

if (window.SimpleAnime) {
  new SimpleAnime();
}

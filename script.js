// MENU MOBILE
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu');
});

// ROLAGEM SUAVE
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth"
  });
}

// MENU MOBILE
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
// SELETOR DE PROJETOS
document.getElementById('filter-projects').addEventListener('change', function(){
  const selectedValue = this.value;
  const projects = document.querySelectorAll('.img-port');

  projects.forEach(project => {
    if (selectedValue === 'fill') {
      project.style.display = 'none';
    } else if (selectedValue === 'all') {
      project.style.display = 'block';
    } else if (project.classList.contains(selectedValue)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});
// REMOVE OS CARDS
document.getElementById('filter-projects').dispatchEvent(new Event('change'));
// TENTANDO CRIAR ANIMAÇÕES
// ROLAGEM SUAVE
const links = document.querySelectorAll("nav ul li a");

for (const link of links){
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event){
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth"
  });
}
// ESTILO DA ANIMAÇÃO NO MOUSE
function createClickAnimation(x, y){
  const circle = document.createElement('div');
  circle.style.position = 'fixed';
  circle.style.border = '3px solid rgba(255, 255, 255, 0.8)';
  circle.style.borderRadius = '50%';
  circle.style.width = '30px';
  circle.style.height = '30px';
  circle.style.left = `${x - 15}px`;
  circle.style.top = `${y - 15}px`;
  circle.style.pointerEvents = 'none';
  circle.style.opacity = '1';
  circle.style.transform = 'scale(0)';
  circle.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
  document.body.appendChild(circle);

  setTimeout(() =>{
    circle.style.transform = 'scale(3)';
    circle.style.opacity = '0';
  }, 10);

  setTimeout(() =>{
    circle.remove();
  }, 600);
}
// ADICIONA A ANIMAÇÃO NO PONTEIRO
document.addEventListener('click', () =>{
  const target = event.target;
  if (target.tagName === 'A' || target.tagName === 'I' || target.tagName === 'SELECT'){
    createClickAnimation(event.clientX, event.clientY);
  }
});
//ANIMAÇÃO PROJETOS
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("filter-projects");
  const projectCards = document.querySelectorAll(".img-port");

  // Função para remover classes de zoom ativo
  function removeZoomEffect() {
    projectCards.forEach(card => {
      card.classList.remove("zoom-in");
    });
  }

  // Adiciona o evento ao select
  selectElement.addEventListener("change", () => {
    const selectedValue = selectElement.value;

    removeZoomEffect();

    projectCards.forEach(card => {
      if (
        selectedValue === "all" || 
        card.classList.contains(selectedValue)
      ) {
        card.classList.add("zoom-in");
      }
    });
  });
});
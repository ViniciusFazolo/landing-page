const projetosContainer = document.querySelector(".projects");

const tecnologias = {
  react: ["fa-brands fa-react"],
  htmlCssJs: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js"],
};

const projetos = [
  {
    name: "Api-Movie",
    path: "assets/img/apimovie.png",
    link: "https://viniciusfazolo.github.io/projeto_filmes/",
    tecnologies: [...tecnologias.htmlCssJs],
  },
  {
    name: "Calculadora",
    path: "assets/img/calculator.jpg",
    link: "https://viniciusfazolo.github.io/calculator/",
    tecnologies: [...tecnologias.react],
  },
  {
    name: "TodoList",
    path: "assets/img/todo.png",
    link: "https://viniciusfazolo.github.io/todo-list/",
    tecnologies: [...tecnologias.react],
  },
  {
    name: 'FIlme com react',
    path: 'assets/img/apifilme2.jpg',
    link: 'https://viniciusfazolo.github.io/outro-consumo-de-filme/',
    tecnologies: [...tecnologias.react]
  }
];

const template = projetos
  .map(
    (item) => `
  <a
    href="${item.link}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="card">
      <div class="card_img">
        <img src="${item.path}" alt="${item.name}" />
      </div>
      <div class="title">
        <h3>${item.name}</h3>
        <div class="tecnologies">
          ${item.tecnologies
            .map((icon) => `<span class="${icon}"></span>`)
            .join("")}
        </div>
      </div>
    </div>
  </a>
`
  )
  .join("");

projetosContainer.innerHTML = template;

//--------------------------------------------
// scroll top
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > 150){
    scrollTop.classList.add('show-scroll-top')
  }
  else{
    scrollTop.classList.remove('show-scroll-top')
  }
})

scrollTop.addEventListener('click', () => { 
  window.scrollTo(0, 0)
})

//--------------------------------------------
//navbar responsive
function open_responsive_navbar(){
  document.querySelector('.screen_opacity').style.display = 'block'
  document.querySelector('.navbar').style.right = 0

  const navbar_li = Array.from(document.querySelectorAll('.navbar ul li'))
  navbar_li.map(item => item.onclick = close_responsive_navbar)
}

function close_responsive_navbar(){
    document.querySelector('.screen_opacity').style.display = 'none'
    document.querySelector('.navbar').style.right = '-100%'
}

//close black screen opacity if resize
window.addEventListener('resize', () => {
  const element = document.querySelector('.screen_opacity')
  const elementDisplay = getComputedStyle(element).display

  if(document.documentElement.clientWidth > 950 && elementDisplay === 'block'){
    element.style.display = 'none'

    //if there is resize, navbar close
    document.querySelector('.navbar').style.right = '-100%'
  }
})
const projetosContainer = document.querySelector(".projects");

const tecnologias = {
  react: ["fa-brands fa-react"],
  htmlCssJs: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-js"],
};

const projetos = [
  {
    name: "Api-Movie",
    path: "img/apimovie.png",
    link: "https://viniciusfazolo.github.io/projeto_filmes/",
    tecnologies: [...tecnologias.htmlCssJs],
  },
  {
    name: "Calculadora",
    path: "img/calculator.jpg",
    link: "https://viniciusfazolo.github.io/calculator/",
    tecnologies: [...tecnologias.react],
  },
  {
    name: "TodoList",
    path: "img/todo.png",
    link: "https://viniciusfazolo.github.io/todo-list/",
    tecnologies: [...tecnologias.react],
  },
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

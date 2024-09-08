// Adicionando conteudo da lista de resume ao HTML
let resultados = "";

let section = document.getElementById("resultados-pesquisa");
let filtersSection = document.getElementById("filters");

resume.forEach((element) => {
  resultados += `
    <div class="item-resultado">
      <h2>${element.titulo}</h2>
      <p class="descricao-meta">
        ${element.descricao}
      </p>
      <a href=${element.link} target="_blank">Mais Informações</a>
    </div>
  `;
});

section.innerHTML = resultados;
// ---

function pesquisar() {
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();
  let botaoLimpar = document.getElementById("limpar");

  let isDarkMode = document.body.classList.contains("dark-mode");

  let resultadoPesquisa = "";

  if (campoPesquisa === "" || campoPesquisa === " ") {
    alert("É necessário informar algo para ser pesquisado");
    return;
  }

  resume.forEach((element) => {
    if (
      element.titulo.toLowerCase().includes(campoPesquisa) ||
      element.descricao.toLowerCase().includes(campoPesquisa)
    ) {
      resultadoPesquisa += `
        <div class="item-resultado ${isDarkMode ? "dark-mode" : ""}">
          <h2>${element.titulo}</h2>
          <p class="descricao-meta ${isDarkMode ? "dark-mode" : ""}">
            ${element.descricao}
          </p>
          <a href=${element.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  });
  if (resultadoPesquisa === "") {
    alert("Nada foi encontrado! Tente pesquisar novamente.");
    return;
  }

  section.innerHTML = resultadoPesquisa;

  if (!botaoLimpar) {
    filtersSection.innerHTML += `
      <button class="limpar" id="limpar" onclick="limpar()">
        X Limpar Filtros/Pesquisa
      </button>
    `;
  }
}

function limpar() {
  let buttonLimpar = document.getElementById("limpar");
  let campoPesquisa = document.getElementById("campo-pesquisa");

  let isDarkMode = document.body.classList.contains("dark-mode");

  let inicio = "";

  campoPesquisa.value = "";

  resume.forEach((element) => {
    inicio += `
      <div class="item-resultado ${isDarkMode ? "dark-mode" : ""}">
        <h2>${element.titulo}</h2>
        <p class="descricao-meta ${isDarkMode ? "dark-mode" : ""}">
          ${element.descricao}
        </p>
        <a href=${element.link} target="_blank">Mais Informações</a>
      </div>
    `;
  });

  section.innerHTML = inicio;

  buttonLimpar.remove();
}

function filtrar(tag) {
  let botaoLimpar = document.getElementById("limpar");
  let isDarkMode = document.body.classList.contains("dark-mode");

  let filtrados = "";

  resume.forEach((element) => {
    if (element.tags.includes(tag)) {
      filtrados += `
        <div class="item-resultado ${isDarkMode ? "dark-mode" : ""}">
          <h2>${element.titulo}</h2>
          <p class="descricao-meta ${isDarkMode ? "dark-mode" : ""}">
            ${element.descricao}
          </p>
          <a href=${element.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  });

  section.innerHTML = filtrados;

  if (!botaoLimpar) {
    filtersSection.innerHTML += `
      <button class="limpar" id="limpar" onclick="limpar()">
        X Limpar Filtros/Pesquisa
      </button>
    `;
  }
}

// Configuração para aplicar modo escuro
const toggleSwitch = document.getElementById("theme-switch");

toggleSwitch.addEventListener("click", () => {
  const allElements = document.querySelectorAll("*");
  const button = document.getElementById("theme-switch");

  allElements.forEach((elements) => {
    elements.classList.toggle("dark-mode");
  });

  const isDarkMode = document.body.classList.contains("dark-mode");
  button.innerHTML = isDarkMode
    ? `<i class="fa-solid fa-sun"></i>`
    : `<i class="fa-solid fa-moon"></i>`;
});
// ---

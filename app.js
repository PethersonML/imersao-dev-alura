// Adicionando conteudo da lista de dados ao HTML
let resultados = "";

let section = document.getElementById("resultados-pesquisa");

dados.forEach((element) => {
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
  let resultadoPesquisa = "";

  if (campoPesquisa === "" || campoPesquisa === " ") {
    alert("É necessário informar algo para ser pesquisado");
    return;
  }

  dados.forEach((element) => {
    if (
      element.titulo.toLowerCase().includes(campoPesquisa) ||
      element.descricao.toLowerCase().includes(campoPesquisa)
    ) {
      resultadoPesquisa += `
        <div class="item-resultado">
          <h2>${element.titulo}</h2>
          <p class="descricao-meta">
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
}

// Configuração para aplicar modo escuro
const toggleSwitch = document.getElementById("theme-switch");

toggleSwitch.addEventListener("click", () => {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((elements) => {
    elements.classList.toggle("dark-mode");
  });
});
// ---

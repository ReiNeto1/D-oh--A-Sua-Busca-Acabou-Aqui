function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado.</p>";
      return;
  }

  // Transforma o valor do campo de pesquisa em minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre cada item (personagem) no array de dados
  for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descrição.toLowerCase();
      let tags = dado.tags.toLowerCase();

      // Verifica se o título, descrição ou tags incluem o valor da pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
          <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descrição}</p>
              <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>`;
      }
  }

  // Caso não haja resultados correspondentes
  if (resultados === "") {
      resultados = "<p>Personagem não encontrado ou não faz parte da família principal.</p>";
  }

  // Exibe os resultados na seção de pesquisa
  section.innerHTML = resultados;
}

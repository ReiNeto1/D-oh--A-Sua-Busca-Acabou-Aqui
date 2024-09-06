|-- index.html          # Página principal do projeto
|-- style.css           # Estilos para a página
|-- app.js              # Lógica JavaScript para interatividade
|-- dados.js            # Dados dos personagens
|-- /simpsons.jpg       # Imagem de fundo dos Simpsons


```markdown
# D'oh! A Sua Busca Acabou Aqui

Este projeto é uma aplicação web simples que permite aos usuários buscar informações sobre personagens da série Os Simpsons. Os usuários podem pesquisar personagens principais e também visualizar outros personagens clicando em um botão adicional.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: A estrutura da página, escrita em HTML.
- `style.css`: O arquivo de estilo que define o design da página (não incluído neste exemplo, mas referenciado no HTML).
- `app.js`: Contém a lógica de pesquisa que permite ao usuário buscar informações sobre os personagens.
- `dados.js`: Contém os dados dos personagens dos Simpsons, como nome, descrição e link para mais informações.

### Estrutura do `index.html`

- O arquivo HTML inclui um campo de entrada para o usuário digitar o termo de pesquisa e um botão para realizar a pesquisa.
- Quando o botão é clicado, a função `pesquisar()` é executada.
- Os resultados da pesquisa são exibidos dinamicamente na seção de resultados.

### Estrutura do `app.js`

- A função `pesquisar()` utiliza os dados dos personagens (definidos em `dados.js`) e gera uma lista de resultados correspondentes.
- Cada resultado inclui o título, uma breve descrição e um link para mais informações.

### Estrutura dos Dados

Os dados dos personagens estão armazenados no formato de um array de objetos, onde cada objeto representa um personagem e contém:
- `título`: O nome do personagem.
- `descrição`: Uma breve descrição do personagem.
- `link`: Um link para mais detalhes sobre o personagem.

Exemplo de um objeto de dado:

```javascript
{
    título: "Homer Simpson",
    descrição: "O pai da família, trabalha na Usina Nuclear de Springfield e é conhecido por sua preguiça, amor por donuts e cerveja Duff",
    link: "https://pt.wikipedia.org/wiki/Homer_Simpson"
}
```

## Como Usar

# Pesquisa de Personagem:
 Na página inicial, digite o nome de um personagem na barra de pesquisa e clique em "Pesquisar". Se o personagem for encontrado, sua descrição será exibida.

# Outros Personagens:
 Clique no botão "Outros Personagens" para visualizar personagens adicionais.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (DOM Manipulation)

## Licença

Este projeto foi criado por Reinaldo Fernandes e está licenciado sob os direitos reservados.

---

© 2024 D'oh! A Sua Busca Acabou Aqui
```


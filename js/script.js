// Ativar links do menu
const linksMenu = document.querySelectorAll(".header-menu li a");

function menuAtivo(item) {
  const urlAtual = window.location.href;
  if (urlAtual.includes(item.href)) {
    item.classList.add("menu-ativo");
  }
}

linksMenu.forEach(menuAtivo);

// Ativar items do orçamento através dos parâmetros passados na URL
const paramsUrl = new URLSearchParams(window.location.search);
paramsUrl.forEach((params) => {
  const formOrcamento = document.getElementById(params);
  if (formOrcamento) {
    formOrcamento.checked = true;
  }
});

// Função de aparecer a respostas do faq pós clique
const perguntasButton = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  // Selecionando os elementos das respostas referentes as perguntas clicadas no faq usando o atributo(aria-controls) como referencia para identificar e modificar a classe ativo
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  if (resposta.classList.contains("ativo")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

perguntasButton.forEach((button) => {
  button.addEventListener("click", ativarPergunta);
});

// Função de Galeria de Imagens
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

galeria.forEach((imgGaleria) => {
  imgGaleria.addEventListener("click", (event) => {
    const img = event.currentTarget;
    // Função que irá adicionar um elemento(img) ao inicio do elemento escolhido(galeriaContainer)
    // Ao clicar numa img da galera essa mesma img clicada será movida para o inicio do container da galeria
    if (window.innerWidth > 1000) {
      galeriaContainer.prepend(img);
    }
  });
});

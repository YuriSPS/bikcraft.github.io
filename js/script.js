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

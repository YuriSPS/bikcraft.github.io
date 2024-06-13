const linksMenu = document.querySelectorAll(".header-menu li a");
console.log(linksMenu);

function menuAtivo(item) {
  const urlAtual = window.location.href;
  if (urlAtual.includes(item.href)) {
    item.classList.add("menu-ativo");
  }
}

linksMenu.forEach(menuAtivo);

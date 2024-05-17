let menu = document.getElementById("menu");
let iconeMenos = document.getElementById("icones-menos");
let iconeBarras = document.getElementById("icone-barras");

const abrirFecharMenu = () => {
  if (menu.classList.contains("menu-fechado")) {
    menu.classList.remove("menu-fechado");
    iconeMenos.style.display = "inline";
    iconeBarras.style.display = "none";
  } else {
    menu.classList.add("menu-fechado");
    iconeBarras.style.display = "inline";
    iconeMenos.style.display = "none";
  }
};

// onresize = () => {
//     menu.classList.remove("menu-fechado");
//     iconeMenos.style.display = "inline";
//     iconeBarras.style.display = "none";
//   };

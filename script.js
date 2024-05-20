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


//fazer depois
let slides = ["banner", "primeiro-banner"]
let slideAtual = 0;

let numeroSlides = slides.length;
let banner = document.querySelector(".banner")
banner.classList.add(slides[slideAtual])

const mostrarSlideAnterior = () =>{
banner.classList.remove(slides[slideAtual]);
if(slideAtual > 0){
  slideAtual --;
}else{
  slideAtual = numeroSlides - 1;
}
banner.classList.add(slides[slideAtual]);
}

const mostrarProximoSlide = () => {
  banner.classList.remove(slides[slideAtual]);
  if (slideAtual < [numeroSlides - 1]) {
    slideAtual++;
  } else {
    slideAtual = 0;
  }
  banner.classList.add(slides[slideAtual]);
};



// const solicitarOrcamento = () => {
//   //solicitar o valor dos inputs 
//   let valorNome = document.getElementById("campo-nome").value
// let valorEmail = document.getElementById("campo-email").value
// let valorDescricao = document.getElementById('campo-descricao').value
// console.log(valorNome)
// console.log(valorEmail)
// console.log(valorDescricao)

// //organizar os dados desse input em um objeto
// let dadosForm = {
// nome: valorNome,
// email: valorEmail,
// descricao: valorDescricao
// }

// // solicitar API
// // método é utilizado para cadastros, ou seja toda a vez que a API for para algo relacionado a cadastro, usar o método POST
// // enviar requisição para a API método fetch
// fetch("http://localhost:3000/solicitacoes", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(dadosForm)
// })
// .then(resposta =>  console.log(resposta))
// .catch(erro => console.error(erro))  //Caso erro - catch alert com mensagem de erro
// }


const solicitarOrcamento = () => {
  // Obter o valor dos inputs
  let valorNome = document.getElementById("campo-nome").value;
  let valorEmail = document.getElementById("campo-email").value;
  let valorDescricao = document.getElementById('campo-descricao').value;

  console.log(valorNome);
  console.log(valorEmail);
  console.log(valorDescricao);

  // Organizar os dados desse input em um objeto
  let dadosForm = {
      nome: valorNome,
      email: valorEmail,
      descricao: valorDescricao
  };

  // Enviar requisição para a API usando o método fetch
  fetch("http://localhost:3000/solicitacoes", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosForm)
  })
  .then(resposta => console.log(resposta))
  .catch(erro => console.error(erro)); // Caso ocorra um erro, exibir mensagem de erro
};

// Adicionar evento de envio ao formulário
document.querySelector(".contato").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  solicitarOrcamento(); // Chama a função que você definiu

    // Limpar os campos (inputs)
    document.querySelector("#contato form").reset()
});

// setup de elementos
var navigation = document.querySelector("nav");
var title = document.querySelector("h1");
var infoAlert = document.querySelector("#infoMessage");
var errorAlert = document.querySelector("#errorMessage");
var successAlert = document.querySelector("#successMessage");
var submitButton = document.querySelector("input[type=button]");

var fieldNomeCompleto = document.querySelector("input[name=nome]");

// funcao que exibe menu no 'mobile'
function showNav(){
  navigation.style.display="block";
}

function escondeAlertas(){
  messagesAlert = document.querySelector("#infoMessage, #errorMessage, #successMessage");
  messagesAlert.style.display="none";
}

function geraErro(){
  switch(fieldNomeCompleto.value) {
    case "erro":
      escondeAlertas();
      errorAlert.style.display = "";
      errorAlert.innerHTML = "Você não preencheu nenhuma informação!";
      break;
    case "atencao":
      //escondeAlertas();
      infoAlert.style.display = "";
      infoAlert.innerHTML = "Algum campo está pendente";
      break;
    case "normal" :
      //escondeAlertas();
      successAlert.style.display = "";
      successAlert.innerHTML = "Deu tudo certo!";
      break;
  }
}

infoAlert.style.display = "none";
errorAlert.style.display = "none";
successAlert.style.display = "none";

// atribuicao de funcao de exibicao do menu durante clique
title.onclick = showNav;
submitButton.onclick = geraErro;




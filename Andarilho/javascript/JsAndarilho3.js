function rota (){
  let escolha = 0
  while(escolha == 0) {
   escolha=(prompt("Escolha sua rota \n 1 ou 2"))
   Number(escolha)
    if(escolha == 1){
      window.location.href=("../html/gameOverAndarilho3.html")
      
    }
    else if(escolha == 2){
      window.location.href=("../html/andarilho4.html")
    }

    else{
      alert("Você deve escolher a rota 1 ou 2 !")
      escolha = 0
    }

  }
}

const botao = document.querySelector("#botao")
botao.addEventListener("click", ()=>{
  rota()
})
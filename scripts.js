/*JavaScript*/
/*Função do botão Adicionar Ideia*/
function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")//Colocar e tirar
    
    /*Retirando o scroll*/
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    /*Colocando scroll caso a pagina contenha mais informações*/
    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

/*Acessando button*/
/*document
    //Procure o botão .fat
    .querySelector("button.fat")
    //Adicionando ouvidor de eventos, nesse caso seria 'click'
    .addEventListener("click", onOff)
*/
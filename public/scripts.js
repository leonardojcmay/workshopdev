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

//Validação front-end
function checkFields(event) {

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link"
    ];

    //Se estiver algum campo vazio. true: encontrou / false: não encontrou
    const isEmpty = valuesToCheck.find(function(value) {

        //Irá buscar dentro do objeto value, e dizer se é uma string ou não
        const checkIfIsString = typeof event.target[value].value === "string";

        //Checando se esta vazio
        const checkIfIsEmpty = !event.target[value].value.trim();

        if (checkIfIsString && checkIfIsEmpty) {
            return true;
        };
    });

    //Se estiver algo vazio não irá enviar nada ao banco de dados
    //E irá retornar uma mensagem ao usuario
    if(isEmpty) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos!");
    }

}
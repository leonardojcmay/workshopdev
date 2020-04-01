//Pacote express para criar e configurar servidor
const express = require('express');
const server = express();

//Lista de ideias
const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur, ad",
        url: "https://rocketseat.com.br"
    },
]


//Configurando arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

//Configurando nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache:true,//não faça um cache, não guardar informações em memória. Quando esta em desenvolvimento é melhor não conter memoria cache
});

//Criando rotas
server.get("/", function(req, res) {

    //Listagem das ideias na pagina index.html
    //Quer que va mostrando na tela a partir da ultima postagem
    const reversedIdeias = [...ideias].reverse();
   
    let lastIdeias = []
    for (let idea of reversedIdeias) {
        //Se tiver 2 ideias dentro, nao colocar mais
        if(lastIdeias.length < 2) {
            //push: adiciona na lista lastIdeias
            lastIdeias.push(idea)
        }
    }

    return res.render("index.html", { ideias: lastIdeias });
});

server.get("/ideias", function(req, res) {

    const reversedIdeias = [...ideias].reverse();

    return res.render("ideias.html", { ideias: reversedIdeias });
});

//Iniciou servidor na porta 3000
server.listen(3000);
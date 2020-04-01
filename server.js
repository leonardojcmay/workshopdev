//Pacote express para criar e configurar servidor
const express = require('express');
const server = express();

//Conectando com o banco de dados
const db = require("./db");

//Configurando arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

//Habilitando uso do req.body
server.use(express.urlencoded({ extended: true }));

//Configurando nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache:true,//não faça um cache, não guardar informações em memória. Quando esta em desenvolvimento é melhor não conter memoria cache
});

//Criando rotas
server.get("/", function(req, res) {

    //Consultar dados na tabela
    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            console.log(err);
            return res.end("Erro no banco de dados!");
        };
    
        //Listagem das ideias na pagina index.html
        //Quer que va mostrando na tela a partir da ultima postagem
        const reversedIdeias = [...rows].reverse();
    
        let lastIdeias = []
        for (let idea of reversedIdeias) {
            //Se tiver 2 ideias dentro, nao colocar mais
            if(lastIdeias.length < 2) {
                //push: adiciona na lista lastIdeias
                lastIdeias.push(idea)
            }
        }

        return res.render("index.html", { ideias: lastIdeias });
    })
  
});

server.get("/ideias", function(req, res) {

    //Consultar dados na tabela
    db.all(`SELECT * FROM ideias`, function(err, rows) {
    
        if (err) {
            console.log(err);
            return res.end("Erro no banco de dados!");
        };

        const reversedIdeias = [...rows].reverse();

        return res.render("ideias.html", { ideias: reversedIdeias });
    
    })
    
});

//Criando nova ideia
server.post("/", function(req, res) {
    //Inserir dado na tabela
    const query = `
    INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(err) {
        if (err) {
            console.log(err);
            return res.end("Erro no banco de dados!");
        };

        //depois de ter cadastrado redirecionar para pagina de /ideias
        return res.redirect("/ideias");

    });

});

//Iniciou servidor na porta 3000
server.listen(3000);
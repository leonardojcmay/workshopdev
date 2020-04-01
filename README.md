# Dia 1

***Link:*** https://www.youtube.com/watch?v=cprMYC8PCVY&list=PL85ITvJ7FLohGTWaE_p0J6B-TLmQbN4ka&index=1

## **Front-end:**

**Ambiente de Desenvolvimento**
<br>*VS Code*
<br>*Node.js*

*HTTP(Hypertext Transfer Protocol):* é um protocolo de transferência que possibilita que as pessoas que inserem a URL do seu site na Web possam ver os conteúdos e dados que nele existem. 

*URL(Uniform Resource Locator):* é uma localização universal para alguma coisa.

**Tecnologias utilizadas:**
<br>*HTML*
<br>*CSS*
<br>*JavaScript*

---

**Iniciando projeto:**
<br>*Casa Criativa*

**Instalar extensão no VS Code:**
<br>*Live server:* serve para recarregar a página web automaticamente após efetuar alguma alteração no código.

Clicar para abrir o projeto com LiveServer
<br>http://127.0.0.1:5500/index.html

Site para criação de layouts:
<br>https://www.figma.com/

---

# Dia 2

Organizando conteúdos: BOX

Site dos icones utilizados:
<br>https://www.flaticon.com/br/packs/stay-at-home-13

Fonte da letra utilizada: Montserrat
<br>https://fonts.google.com/specimen/Montserrat

---

# Dia 3

Criação da página ideias.html

---

# Dia 4

## **Back-end:**

**Responsabilidades:**
<br>Receber pedidos do usuario
<br>Devolver resposta para o usuario
<br>Regras de negócio
<br>Dados

**Tecnologias utilizadas:**
<br>*Node.js*
<br>*Banco de dados*

**Iniciando back-end:**
<br>Criado arquivo server.js

Rodar comandos abaixo:
```
npm init -y

npm i express

npm install nodemon -D
```


Arquivo package.json:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
```

Iniciando servidor:
```
npm start
```

Instalar nunjucks: permite que use variaveis no HTML:
```
npm i nunjucks
```

---

# Dia 5

## **Banco de Dados:**

Dados não podem ficar na aplicação
<br>Segurança
<br>Responsabilidades

**SQL(Structured Query Language):**
<br>Linguagem para consultar, criar, atualizar, listar, deletar...
<br>Tabelas/Entidades/Relações

**Tecnologia utilizada:**

*SQLite:* é open-source, não precisa de um mundo de configurações, é estruturado para ser um banco de dados relacioal que reside na própria aplicação.

Instalando:
```
npm i sqlite3
```

Comando que executa somente o banco de dados:
```
node db.js
```


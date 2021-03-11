const express = require('express');
const app = express();
const cors = require('cors');

// ==> Rotas da API:
const index = require('../src/Routter/index');
const transacoes = require('../src/Routter/transacoes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(express.json({type: 'application/vnd.api+json'}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Content-Type"),
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(index);
app.use('/api/', transacoes);

module.exports = app;
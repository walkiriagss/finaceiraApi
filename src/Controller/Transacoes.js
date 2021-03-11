const db = require('../../Config/database');

// ==> Método responsável por criar uma nova 'Transação':
exports.createTransacao = async (req, res) => {

  const {tipo, data, categoria, valor} = req.body;

  const {rows} = await db.query(
    'INSERT INTO transacoes (tipo, data, categoria, valor) VALUES ($1, $2, $3, $4) RETURNING id',
    [tipo, data, categoria, valor],
  );
  const id = rows[0].id;
  res.status(201).send({
    resumo: {tipo, data, categoria, valor},
  });
};

// ==> Método responsável por listar todas as 'Transacoes':
exports.listAllTransacao = async (req, res) => {
  const response = await db.query('SELECT * FROM transacoes ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Transação' pelo 'id':
exports.findTransacaoById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM transacoes WHERE id = $1', [
    id,
  ]);
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar uma 'Transação' pelo 'id':
exports.updateTransacaoById = async (req, res) => {
  const id = req.params.id;
  const {tipo, data, categoria, valor} = req.body;

  const response = await db.query(
    'UPDATE transacoes SET tipo = $1, data = $2, categoria = $3, valor = $4 WHERE id = $5',
    [tipo, data, categoria, valor, id],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};

// ==> Método responsável por excluir uma 'Transação' pelo 'Id':
exports.deleteTransacaoById = async (req, res) => {
  const transacaoId = parseInt(req.params.id);
  await db.query('DELETE FROM transacoes WHERE id = $1', [transacaoId]);

  res.status(200).send({message: 'Transação deleted successfully!', transacaoId});
};

// ==> Método responsável  por retornar o somatória dosvalores de cada categoria de receitas
exports.somaReceita = async (req, res) => {
  const receita = "Receita";
  let somatorio = 0;
  let salario = 0;
  let outros = 0;
  let investimento = 0;
  let premio = 0;
  let presente = 0;
  const response = await db.query('SELECT categoria, tipo, valor FROM transacoes WHERE tipo = $1::varchar', [receita]);
  for(let i = 0; i < response.rowCount; i++){
    somatorio += response.rows[i].valor
    if(response.rows[i].categoria == "Salario"){
      salario += response.rows[i].valor
    }
    if(response.rows[i].categoria == "outros"){
      outros += response.rows[i].valor
    }
    if(response.rows[i].categoria == "investimento"){
      investimento += response.rows[i].valor
    }
    if(response.rows[i].categoria == "premio"){
      premio += response.rows[i].valor
    }
    if(response.rows[i].categoria == "presente"){
      presente += response.rows[i].valor
    }
  }
  res.status(200).send({
    somatorio,
    salario,
    outros,
    investimento,
    premio,
    presente
  });
};

// ==> Método responsável  por retornar o somatória dosvalores de cada categoria de despesas
exports.somaDespesa = async (req, res) => {
  const despesas = "Despesa";
  let somatorioDespesas = 0;
  let alimentacao = 0;
  let educacao = 0;
  let saude = 0;
  let lazer = 0;
  let moradia = 0;
  let transporte = 0;
  let outros = 0;
  const response = await db.query('SELECT categoria, tipo, valor FROM transacoes WHERE tipo = $1::varchar', [despesas]);
  for(let i = 0; i < response.rowCount; i++){
    somatorioDespesas += response.rows[i].valor
    if(response.rows[i].categoria == "Alimentacao"){
      alimentacao += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Educacao"){
      educacao += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Saude"){
      saude += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Lazer"){
      lazer += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Moradia"){
      moradia += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Transporte"){
      transporte += response.rows[i].valor
    }
    if(response.rows[i].categoria == "Outros"){
      outros += response.rows[i].valor
    }
  }
  res.status(200).send({
    somatorioDespesas,
    alimentacao,
    educacao,
    saude,
    lazer,
    moradia,
    transporte,
    outros
  });
};


// ==> Método responsável  por retornar o balanço geral
exports.balanco = async (req, res) => {
  let somatorioDespesas = 0;
  let somatorioReceita = 0;
  let balanco = 0;

  const response = await db.query('SELECT tipo, valor FROM transacoes');
  for(let i = 0; i < response.rowCount; i++){
    if(response.rows[i].tipo == "Receita"){
      somatorioReceita += response.rows[i].valor
    }
    if(response.rows[i].tipo == "Despesa"){
      somatorioDespesas += response.rows[i].valor
    }
  }
  balanco = somatorioReceita - somatorioDespesas
  res.status(200).send({
    somatorioReceita,
    somatorioDespesas,
    balanco
  });
};



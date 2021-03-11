const router = require('express-promise-router')();
const TransacoesController = require('../Controller/Transacoes');

// ==> Definindo as rotas do CRUD - 'Resumo':

// ==> Rota responsável por criar uma nova 'transação': (POST): localhost:8080/api/transacoes
router.post('/transacoes', TransacoesController.createTransacao);

// ==> Rota responsável por listar todas transações: (GET): localhost:8080/api/transacoes

router.get('/transacoes', TransacoesController.listAllTransacao);

// ==> Rota responsável por selecionar 'Transação' pelo 'id' : (GET): localhost:8080/api/transacoes/1
router.get('/transacoes/:id', TransacoesController.findTransacaoById);

// ==> Rota responsável por atualizar 'Transação' pelo 'id': (PUT): localhost: localhost:8080/api/transacoes/1
router.put('/transacoes/:id', TransacoesController.updateTransacaoById);

// ==> Rota responsável por excluir 'Transação' pelo 'Id': (DELETE): localhost:8080/api/transacoes/1
router.delete('/transacoes/:id', TransacoesController.deleteTransacaoById);

// ==> Rota responsável por retornar o somatória dosvalores de cada categoria de receitas: (DELETE): localhost:8080/api//soma
router.get('/soma', TransacoesController.somaReceita);

// ==> Rota responsável por retornar o somatória dosvalores de cada categoria de despesas: (DELETE): localhost:8080/api//soma
router.get('/somadespesas', TransacoesController.somaDespesa);

// ==> Rota responsável por retornar o balanço enre receita e despesa: (DELETE): localhost:8080/api//soma
router.get('/balanco', TransacoesController.balanco);

module.exports = router;


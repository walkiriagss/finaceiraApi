<h1 align="center">Back-End Sistema Financeiro</h1>
<p align="center">O presente trabalho é um teste para uma vaga de emprego, onde deveria ser desenvolver um pequeno sistema web onde os usuários deverão
conseguir incluir suas receitas, suas despesas e o sistema deverá fornecer um feedback visual
informando a situação atual do usuário (positivo, negativo).</p>
<p align="center">Este é o Back-End do projeto, com API para o Front-End</p>
<h4 align="center"> 
	🚧  Node  🚀 Em construção...  🚧
</h4>
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
Para que tenha acesso às API's, você deve criar banco de dados com a tabela disponível em back/bd.sql, fazer as configurações do seu 
PostgreSQL em back/.env e por fim, executar a aplicação.

### 🎲 Rodando 

```bash
# Clone este repositório
$ git clone <https://github.com/walkiriagss/financeira.git>

# Acesse a pasta do projeto backend no terminal/cmd
$ cd back

# Acesse a pasta de criação da tabela do banco de dados
$ cd back/bd.sql

# Copie a tabela e cole o em um novo script no portgreSql

# Subistitua as configurações do banco para as configurações do seu banco em  
$ cd back/.env
DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}

# Execute a aplicação backend
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080> - Deixe esse rodando e execute o front com instruções abaixo

# Acesse a pasta do projeto no terminal/cmd
$ cd financeira

# Instale as dependências
$ npm install

# Execute a aplicação backend
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
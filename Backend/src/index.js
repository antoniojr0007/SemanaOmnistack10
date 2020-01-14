const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.set('useCreateIndex', true);
const dbString = '<Insira o URL do MongoDB aqui>';

if (dbString.startsWith('<')){
  let redStr = "\x1b[31m";
  console.error(redStr + "ERRO! Você não configurou o MongoDB ainda!");
  console.error(redStr + "Adicione o Cluster padrão, o Usuário do banco e adicione a linha de conexão em 'Clusters > Connect > Connect Your Application' no arquivo index.js!");
  return;
}

mongoose.connect(dbString,  {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });

app.use(express.json());
app.use('/api', routes);
app.listen(3333);
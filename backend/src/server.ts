import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);


/*
Query builder - utilizado nas edições anteriores da NLW (exemplo: knex)
Escrevia a query com sintaxe javascript
Exemplo: knex('users').select('*').where('name', 'Diego');

ORM (object relational mapping) - será utilizado nessa edição (exemplo: typeorm)
Relaciona os objetos e classes com as tabelas do banco de dados
*/
let express = require('express');
let app = express();
let db = require('./dbConn');


let TodoController = require('./routes/todo/todoController');
app.use('/todos', TodoController);
module.exports = app;
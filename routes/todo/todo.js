let mongoose = require('mongoose');
let todoDetails = new mongoose.Schema({
    title: String,
    description: String,
    owner: String,
    email: String,
    dateCreated: Date
});
mongoose.model('todo', todoDetails);
module.exports = mongoose.model('todo');
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
let todo = require('./todo');

let timeNow = function timeNow() {
    let today = new Date();
    today.setHours(today.getHours() + 5);
    today.setMinutes(today.getMinutes() + 30);
    return today;
};

// CREATES A NEW TODO1
router.post('/', function (req, res) {

    todo.create({
            title: req.body.title,
            description: req.body.description,
            owner: req.body.owner,
            email: req.body.email,
            dateCreated: timeNow()
        },
        function (err, td) {
            if (err) return res.status(500).send("There was a problem adding the todo to the database.");
            res.status(200).send(td);
        });
});

// RETURNS ALL THE TODOS IN THE DATABASE
router.get('/', function (req, res) {
    todo.find({}, function (err, todos) {
        if (err) return res.status(500).send("There was a problem finding the todo's.");
        res.status(200).send(todos);
    });
});

// GETS A SINGLE TODO1 FROM THE DATABASE
router.get('/:id', function (req, res) {
    todo.findById(req.params.id, function (err, td) {
        if (err) return res.status(500).send("There was a problem finding the todo.");
        if (!td) return res.status(404).send("No such todo found.");
        res.status(200).send(td);
    });
});

// UPDATES A TODO1 USER IN THE DATABASE
router.put('/:id', function (req, res) {

    todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, td) {
        if (err) return res.status(500).send("There was a problem updating the todo.");
        res.status(200).send(td);
    });
});

// DELETES A TODO1 FROM THE DATABASE
router.delete('/:id', function (req, res) {
    todo.findByIdAndRemove(req.params.id, function (err, td) {
        if (err) return res.status(500).send("There was a problem deleting the todo.");
        res.status(200).send("todo " + td.title + " was deleted.");
    });
});

module.exports = router;
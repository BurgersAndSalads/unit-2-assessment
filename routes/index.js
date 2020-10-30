const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    todo: Todo.todoList
  });
});

router.post('/new', function(req, res) {
  let add = {};
  add.done = false;
  add.todo= req.body.todo;
  Todo.todoList.push(add);
  console.log(Todo.todoList)
  res.redirect('/')
})

module.exports = router;

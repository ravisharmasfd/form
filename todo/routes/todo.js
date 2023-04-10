const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({
      title,
      description,
      completed: false
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).send('Todo not found!');
    }
    todo.completed = completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});


module.exports = router;

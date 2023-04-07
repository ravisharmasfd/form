const express = require('express');
const router = express.Router();
const Expense = require('../model/expense');

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get an expense by ID
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create an expense
router.post('/', async (req, res) => {
  try {
    const { amount, description, category, time } = req.body;
    const expense = await Expense.create({ amount, description, category, time });
    res.json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update an expense by ID
router.put('/:id', async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    const { amount, description, category, time } = req.body;
    expense.amount = amount;
    expense.description = description;
    expense.category = category;
    expense.time = time;
    await expense.save();
    res.json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an expense by ID
router.delete('/:id', async (req, res) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        if (expense) {
          await expense.destroy();
          res.status(204).send();
        } else {
          res.status(404).json({ message: 'Expense not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
module.exports = router;    
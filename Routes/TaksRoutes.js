const express = require('express');
const { createTask, getTasks, getOneTask, updateTask, deleteTask }  = require('../Controllers/TaskController')

// CREATING ROUTER FROM EXPRESS
const router = express.Router();

// ROUTES
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask)

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

// GET /api/todos -read
router.get('/todos',controller.readTodos);

// Post /api/todo - create a new todo (create)
router.post('/todo',controller.createTodo);

// PATCH /api/todo/:todoId - update
router.patch('/todo/:todoId',controller.updateTodo);
// DELETE /api/todo/:todoId - remove a todo - delete 
router.delete('/todo/:todoId',controller.deleteTodo);

module.exports = router;
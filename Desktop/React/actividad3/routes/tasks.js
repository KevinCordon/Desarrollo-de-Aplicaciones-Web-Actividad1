const express = require('express');
const router = express.Router();

let taskId = 4;
let goalId = 4;

let tasks = [
  {
    id: 1,
    name: "Estudiar Node.js",
    description: "Revisar los conceptos básicos de Node y Express.",
    deadline: "2025-05-15"
  },
  {
    id: 2,
    name: "Preparar presentación",
    description: "Crear las diapositivas para la reunión del viernes.",
    deadline: "2025-05-16"
  },
  {
    id: 3,
    name: "Enviar reporte mensual",
    description: "Completar y enviar el informe de desempeño.",
    deadline: "2025-05-18"
  }
];

let goals = [
  {
    id: 1,
    name: "Aprender programación web",
    description: "Dominar HTML, CSS, JavaScript y Node.js en 3 meses.",
    deadline: "2025-08-01"
  },
  {
    id: 2,
    name: "Leer 5 libros",
    description: "Leer al menos 5 libros de desarrollo personal este año.",
    deadline: "2025-12-31"
  },
  {
    id: 3,
    name: "Hacer ejercicio regularmente",
    description: "Ir al gimnasio 3 veces por semana durante 2 meses.",
    deadline: "2025-07-01"
  }
];

// GET tasks
router.get('/getTasks', (req, res) => {
  res.status(200).json({ tasks });
});

// GET goals
router.get('/getGoals', (req, res) => {
  res.status(200).json({ goals });
});

// POST add task
router.post('/addTask', (req, res) => {
  const { name, description, deadline } = req.body;

  if (!name || !description || !deadline) {
    return res.status(400).json({ message: 'name, description and deadline are required' });
  }

  const newTask = { id: taskId++, name, description, deadline };
  tasks.push(newTask);

  res.status(200).json({ message: 'Task added successfully', task: newTask });
});

// POST add goal
router.post('/addGoal', (req, res) => {
  const { name, description, deadline } = req.body;

  if (!name || !description || !deadline) {
    return res.status(400).json({ message: 'name, description and deadline are required' });
  }

  const newGoal = { id: goalId++, name, description, deadline };
  goals.push(newGoal);

  res.status(200).json({ message: 'Goal added successfully', goal: newGoal });
});

// DELETE remove task
router.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: 'Task ID is required' });

  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    return res.status(400).json({ message: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(200).json({ message: 'Task removed successfully', id });
});

// DELETE remove goal
router.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: 'Goal ID is required' });

  const index = goals.findIndex(goal => goal.id === id);
  if (index === -1) {
    return res.status(400).json({ message: 'Goal not found' });
  }

  goals.splice(index, 1);
  res.status(200).json({ message: 'Goal removed successfully', id });
});

module.exports = router;

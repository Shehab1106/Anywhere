const express = require('express');
const { getQuizzes, createQuiz, deleteQuiz, updateQuiz } = require('../controllers/quizController');
const router = express.Router();
const methodOverride = require('method-override');

router.use(methodOverride('_method'))

router.get('/', getQuizzes);
router.post('/', createQuiz);
router.delete('/:id',deleteQuiz);
router.put('/:id',updateQuiz);

module.exports = router;
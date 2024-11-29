const Quiz = require('../models/Quiz');
const {handleError} = require('../error/handleError');
const apperror = require('../AppError');

const getQuizzes = handleError(async (req, res,next) => {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
});

const createQuiz = handleError(async (req, res,next) => {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
});

const deleteQuiz = handleError(async(req,res,next)=>{
    const{id} = req.params;
    const deletedQuiz = await Quiz.findByIdAndDelete(id);
    if(!deletedQuiz){
        throw new apperror(404,'Quiz Not Found');
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
});

const updateQuiz = handleError(async(req,res,next)=>{
    const{id} =req.params;
    const updatedQuiz = await Quiz.findByIdAndUpdate(id,req.body);
    if(!updatedQuiz){
        throw new apperror(404,'Quiz Not Found');
    }
    res.status(200).json(updatedQuiz);
});

module.exports = { getQuizzes, createQuiz, deleteQuiz, updateQuiz };

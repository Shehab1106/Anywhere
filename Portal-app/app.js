const express = require('express');
const app = express();
const connectDB = require('./config/db');
const announcements = require('./routes/announcements');
const quizzes = require('./routes/quizzes');
const cors = require('cors');
const apperror = require('./AppError');

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/announcements', announcements);
app.use('/api/quizzes', quizzes);


app.get('/', (req, res) => {
    res.send('API is running...');
  });

  app.all(/(.*)/, (req, res, next) => {
    next(new apperror(404,'Page Not Found'));
})
app.use((err,req,res,next)=>{
    const {statuscode=500}=err;
    if(!err.message)err.message="Something Went Wrong";
    res.status(statuscode).json({ message: err.message });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    try {
        console.log("App is running");
    } catch (error) {
        console.log("Error!!! ",error);
    }
})
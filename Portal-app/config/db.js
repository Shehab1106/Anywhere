const mongoose = require('mongoose');

const Mongo_URI = process.env.Mongo_URI || 'mongodb://127.0.0.1:27017/anyware';
const connectDB = ()=>{mongoose.connect(Mongo_URI)
.then(()=>{
    console.log('Connected to mongoose');
})
.catch((error)=>{
    console.log('Error!!! ',error);
})}

module.exports = connectDB;
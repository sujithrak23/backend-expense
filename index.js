//importing
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const expenseRoutes = require('./routes/expenseRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/user',userRoutes)
app.use('/expense',expenseRoutes)


async function connectDB(){
   try{
    await mongoose.connect('mongodb+srv://sujithrakamaraj:DciFIKVnnISGGjbg@cluster0.6pu5cys.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB connection established')
    const port = process.env.PORT || 5000
    app.listen(port,function(){
        console.log(`listening to the port ${port}..`)
    })
   }catch(error){
    console.log(error)
    console.log('having error in db connection')
   }
}
connectDB()











//import mongoose
const mongoose = require('mongoose')

//defining schema
const expenseDetailsSchema = new mongoose.Schema({
    amount : {
        type : Number
    },
    category : {
        type: String
    },
    date : {
        type : String
    },
    userID : {
        type : String
    }
},{versionKey: false})

//creating model
const Expense = mongoose.model('ExpenseDB',expenseDetailsSchema)

//export Expense module
module.exports = { Expense }

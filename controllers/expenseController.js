//importing
const {Expense} = require('../models/Expense.js')

async function addExpense(request,response){
    try{
        await Expense.create({
            "amount" :  request.body.amount,
            "category" : request.body.category,
            "date" : request.body.date,
            "userID" : request.params.userID
           })
           response.status(201).json({
            "status" : "success",
            "message" : "entry created",
        })
    }catch(error){
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
}

async function getExpense(request,response){
    try{
      const getdetails = await Expense.find({"userID" : request.params.userID})
      response.status(200).json(getdetails)
    }catch(error){
       response.status(500).json({
          "status" : "failure",
          "message" : "could not fetch data",
          "error" : error
       })
    }
}


async function deleteExpense(request,response){
    try{
        await Expense.findByIdAndDelete(request.params.id)
        response.status(200).json({
            "status" : "success",
            "message" : "entry deleted",
        })
    }catch(error){
        response.status(500).json({
            "status" : "failure",
            "message" : "could not delete data",
            "error" : error
         })
    }
}


async function updateExpense(request,response){
    try{
        await Expense.findByIdAndUpdate(request.params.id,{
            "amount" :  request.body.amount,
            "category" : request.body.category,
            "date" : request.body.date,
            "userID" : request.body.userID
        })
        response.status(200).json({
            "status" : "success",
            "message" : "entry updated",
        })
    }catch (error){
        response.status(500).json({
            "status" : "failure",
            "message" : "could not update data",
            "error" : error
         })
    }
}


//exporting
module.exports = {addExpense,getExpense,deleteExpense,updateExpense}
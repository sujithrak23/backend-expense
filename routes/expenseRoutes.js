//importing 
const express = require('express')
const { addExpense, getExpense, deleteExpense, updateExpense } = require('../controllers/expenseController')
const router = express.Router()
const jwt = require('jsonwebtoken')

const secretKey = 'super'

function authenticateToken(request,response,next){
    try{
        const authHeader = request.headers.authorization
        const accessToken = authHeader && authHeader.split(' ')[1]
        if(accessToken){
        jwt.verify(accessToken, secretKey, (error, UserDetails) => {
            if(error){
                response.status(401).json({
                    "status" : "failure",
                    "message" : "access denied"
                })
            }else{
                next()
            }           
        })
        }
        else{
            response.status(201).json({
                "status" : "failure",
                "message" : "access token not found",
            }) 
        } 
    }catch(error){
        response.status(401).json({
            "status" : "failure",
            "message" : "access denied",
        })
    }
}

// function authenticateToken(request,response,next){
//     next()
// }

router.post('/new/:userID', authenticateToken, addExpense)

router.get('/all/:userID', authenticateToken, getExpense)

router.delete('/delete/:id', authenticateToken, deleteExpense)

router.patch('/update/:id',authenticateToken, updateExpense)


//exporting router
module.exports = router
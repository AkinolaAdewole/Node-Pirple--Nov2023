const express = require('express')
const {res}=require ('express')

const app =express()

const todoController= require('./controllers/todoController')

//fire controller
todoController(app)
// set template engine
app.set('view engine',  'ejs')

// Static files(middlewares)
app.use(express.static('public'))

app.listen(7000, ()=>{
    console.log('server is running')
}) 
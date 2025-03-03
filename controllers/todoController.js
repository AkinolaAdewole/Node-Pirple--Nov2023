const {res}=require('express')
const express = require('express')
const app =express()
const {req}=require('http')
const bodyParser=require('body-parser')


const data=[{item:"draw"}, {item:"code"}]
// app.use(bodyParser.urlencoded({ extended: false })) 
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const todoModel=require('../model/todoModel')



  const addTodo=()=>{
    const{item}=request.body
      todoModel.create({item}, (err,res)=>{
        
        if(err){
            console.log(err);
            console.log("There us error");
        }else{
            console.log('saved')
        }
    })
    data.push({item}) 
  }
  


const getTodo=(request, res)=>{
  todoModel.find((err,res)=>{
      res.send(json.stringify(res))
  })}

    app.get('/todo',(req,res)=>{
        res.render("pages/todo", {todos:data}) 
       })
      
       
      
      app.delete('/todo',(req,res)=>{
          
      })
module.exports={getTodo, addTodo}


const {res}=require('express')

const inputTodo=(app)=>{
 app.get('/todo',(req,res)=>{
  res.render("pages/todo")
 })

 app.post('/todo',(req,res)=>{
    
})

app.delete('/todo',(req,res)=>{
    
})
}

module.exports={inputTodo}
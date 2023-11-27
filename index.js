const express = require('express')
const {res}=require ('express')
const {req}=require('http')
const app =express()
const cors=require('cors')
app.use(express.json())
const bodyParser=require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: true })) 
const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config()
const multer = require('multer')


app.use(cors())
app.use(express.json())
const upload=multer({})
mongoose.connect(
    process.env.URI, 
    {useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>{
    console.log("connected")
}).catch(err=>{
    console.log(err);
})


const TodoSchema = new mongoose.Schema({
    item:String,
    time:String,
    date:String,
    // user:{
    //   ref:"user",
    //   type:mongoose.Schema.Types.ObjectId,
    //   required:true,
    //   default:""
    // }
  }) 

  const TodoModel=mongoose.model('mytodo', TodoSchema)


// To upload file
app.post('/todo', upload.single("image"),(req,res)=>{
    res.send('send')
})
app.get('/inputTodo',(req,res)=>{
    res.render("pages/inputTodo")
})

app.post("/inputTodo",(req,res)=>{
    let User=req.body
    console.log(User)
      TodoModel.create({name:todoName}, (err,res)=>{
        if(err){
            console.log(err);
            console.log("There is error");
        }else{
            console.log('saved')
        }
    })
   res.redirect("/") 
 }) 

 app.get("/", (req,res)=>{
    
 }) 

 app.post('/todo', (req,res)=>{

 })
app.get('/todo',(req,res)=>{
    TodoModel.find((err,result)=>{
        if(err){
            console.log(err);
            console.log("There is error");
        }else{
            console.log('saved')
            res.render("pages/todo",{allUser: result})
        }
    })   
   })



// set template engine
app.set('view engine',  'ejs')

// Static files(middlewares) 

app.listen(4800, ()=>{ 
    console.log('server is running')
}) 
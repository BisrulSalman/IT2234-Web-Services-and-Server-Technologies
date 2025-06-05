const express=require('express'); 
const app=express();
const port=3009;
const mongoose = require('mongoose')

const departmentRouter = require('./routes/departmentRoutes')
const employeeRouter = require('./routes/employeeR')
app.use(express.json()) 


app.use('/department',departmentRouter);
app.use('/employee',employeeRouter);

mongoose.connect('mongodb://localhost:27017/ica2').then(()=> 
{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
  
    console.log(`server is running on ${port}`);
})


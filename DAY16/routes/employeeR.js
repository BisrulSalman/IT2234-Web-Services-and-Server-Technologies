const express=require('express')
const router=express.Router()


const Employee = require('../models/Employee');


router.get('/', async (req,res) =>{


    try{
        const result = await Employee.find();
        console.log(result);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }


})

router.get('/department', async (req,res) =>{


    try{
        const result = await Employee.find().populate('departmentID');
        console.log(result);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }
})




module.exports = router;
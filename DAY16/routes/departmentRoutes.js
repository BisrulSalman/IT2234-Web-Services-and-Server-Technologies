const express=require('express')
const router=express.Router()
const departmentService = require('../service/departmentService')


const Department = require('../models/Department');


router.get('/', async (req,res) =>{


    try{
        const result = await Department.find();
        console.log(result);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }


})


router.get('/employees', async (req,res) =>{


    try{
        const result = await Department.find().populate("employeeID");
        console.log(result);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json(error);
    }


})

router.get('/:departmentName/employeeCount', async (req, res) => {
    try {
        const number = await departmentService.employeeCountByDepartment(req.params.departmentName);
        console.log(number);
        res.status(200).send(number.toString()); // toString to avoid sending as raw number
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});



router.get('/employeeCount', async (req,res) =>{


    try{

        const result = await Department.find();

        const newResult = result.map(dep=>(
            {
                id:dep._id,
                name:dep.name,
                numberOfEmployees : dep.employeeID.length  
            }
        )
            
        )
        console.log(newResult);
        res.status(200).send(newResult);
    }
    catch(error){
        res.status(500).json(error);
    }
})



router.post('/add', async (req,res) =>{

    try{

        const {_id, name, employeeID } = req.body;

        const result = await Department.insertOne({_id, name, employeeID});
        console.log(result);

        res.status(200).json(result);

    }
    catch(error)
    {
         res.status(500).send("Internasl Error");
    }

})




module.exports = router;
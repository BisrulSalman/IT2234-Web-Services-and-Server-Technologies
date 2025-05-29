const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

router.get('/',async (req,res)=>{
    try {
        const results = await Course.find()
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).json("Sorry,No Data Found!")
        }
    } catch (error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})
module.exports = router
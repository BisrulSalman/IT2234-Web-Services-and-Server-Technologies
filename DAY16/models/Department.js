const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name :{type:String, required: true},
    employeeID:[{type:String, ref:'Employee'}],

});


const Department = mongoose.model('Department', departmentSchema);


module.exports = Department;


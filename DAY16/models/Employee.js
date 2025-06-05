const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema(
    {
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        salary: { type: Number, required: true, min: 0 },
        departmentID: { type: String, ref: 'Department' },
        projectIds: [{type:String, ref:'Project'}],
        etfID: {type:String,ref:'Etf'}
    }
)

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
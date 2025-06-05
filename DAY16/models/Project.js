const mongoose=require('mongoose')
const projectSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    employeeID: [{ type: Number, ref: 'Employee' }]
});


const Project = mongoose.model('Project',projectSchema);

module.exports = Project;
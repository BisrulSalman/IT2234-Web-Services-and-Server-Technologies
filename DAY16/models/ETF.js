const mongoose=require('mongoose')

const etfSchema = new mongoose.Schema({

    _id: { type: String, required: true },
    employeeID: { type: Number, ref: 'Employee', unique: true },
    balance: { type: Number, required: true }
});

const Etf = mongoose.model('etf', etfSchema);
// departmentService.js
const Department = require('../models/Department');

async function employeeCountByDepartment(departmentName) {
    const result = await Department.findOne({ name: departmentName });
    if (!result) return 0;
    return result.employeeID.length;
}

module.exports = { employeeCountByDepartment };

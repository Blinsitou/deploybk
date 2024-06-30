const mongoose = require('mongoose');
const Modelemployee = new mongoose.Schema(
    {
        name:{type: String},
        position:{type: String},
        office:{type: String},
        salary:{type: Number}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const employeeModel = mongoose.model("employees", Modelemployee);
module.exports = employeeModel;
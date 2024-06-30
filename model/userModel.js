const mongoose = require('mongoose');
const ModelUser = new mongoose.Schema(
    {
        nomuser:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const userModel = mongoose.model("users", ModelUser);
module.exports = userModel;
const userModel = require('../model/userModel');
const userCtrl = {};


//Crear
userCtrl.createUser =async (req, res) => {
    const body = req.body;
    const respuesta = await userModel.create(body)
    res.send(respuesta)
}

//Consultar todos
userCtrl.getUser = async (req, res)=> {
    const respuesta = await userModel.find({})
    res.send(respuesta)
}

//Consultar por ID
userCtrl.getUniqueUser = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await userModel.findById({_id:id})
    res.send(respuesta)
}

//Actualizar
userCtrl.editUser = async (req, res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await userModel.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}

//Eliminar
userCtrl.deleteUser = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await userModel.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = userCtrl;
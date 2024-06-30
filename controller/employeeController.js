const employeeModel = require('../model/employeeModel');
const emplCtrl = {};

//Crear
emplCtrl.createEmployee =async (req, res) => {
    const body = req.body;
    const respuesta = await employeeModel.create(body)
    res.send(respuesta)
}

//Consultar todos
emplCtrl.getEmployee = async (req, res)=> {
    const respuesta = await employeeModel.find({})
    res.send(respuesta)
}

//Consultar por ID
emplCtrl.getUniqueEmployee = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await employeeModel.findById({_id:id})
    res.send(respuesta)
}

//Actualizar
emplCtrl.editEmployee = async (req, res)=> {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await employeeModel.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}

//Eliminar
emplCtrl.deleteEmployee = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await employeeModel.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = emplCtrl;
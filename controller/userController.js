const userModel = require('../model/userModel');
const userCtrl = {};

// Ruta para el registro de usuarios
/*router.post('/register', async (req, res) => {
    try {
        const body = req.body;
        const newUser = new userModel(body);
        await newUser.save();
        res.status(201).send({ message: 'Registro exitoso', user: newUser });
    } catch (error) {
        res.status(400).send({ error: 'Error en el registro', details: error.message });
    }
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { nomuser, password } = req.body;
        const user = await userModel.findOne({ nomuser, password });
        if (user) {
            res.send({ message: 'Autenticación satisfactoria' });
        } else {
            res.status(401).send({ error: 'Error en la autenticación' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Error en la autenticación', details: error.message });
    }
});
*/

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
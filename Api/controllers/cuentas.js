
const Cuenta = require('../Models/userModel');

async function getCuentas() {
    
}
async function createCuenta(req,res){
    try {
        // Verificar si los IDs de los titulares están presentes en el cuerpo de la solicitud
        const titulares = req.body.titulares;
        if (!titulares || !Array.isArray(titulares) || titulares.length === 0) {
            return res.status(400).json({ message: 'Se requiere al menos un ID de usuario para crear la cuenta' });
        }

        // Verificar si los usuarios existen utilizando los IDs proporcionados
        const usuarios = await User.find({ _id: { $in: titulares } });
        if (usuarios.length !== titulares.length) {
            return res.status(404).json({ message: 'Alguno de los usuarios no se encontró' });
        }

        // Crear la cuenta y asignar los IDs de los titulares a la lista de titulares
        const newCuenta = new Cuenta({
            tipo_cuenta: req.body.tipo_cuenta,
            saldo: req.body.saldo,
            titulares: titulares // Asignar los IDs de los usuarios como titulares de la cuenta
        });

        // Guardar la cuenta
        await newCuenta.save();

        //Agregar la cuenta a cada usuario
        for (const usuario of usuarios) {
            usuario.cuentas.push(newCuenta._id);
            await usuario.save();
        }

        res.status(201).json({ message: 'Nueva cuenta creada y agregada a los usuarios', cuenta: newCuenta });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
async function deleteCuentas(id,req,res){
    try {
        const deletedCuenta = await Cuenta.findByIdAndDelete(id);
        if (!deletedCuenta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function updateCuenta(id,req,res){    
    try {
    const updatedCuenta = await Cuenta.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCuenta) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(updatedCuenta);
} catch (error) {
    res.status(400).json({ message: error.message });
}

}

module.exports = {
    getCuentas,
    createCuenta,
    deleteCuentas,
    updateCuenta
}
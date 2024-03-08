
const User = require('../Models/userModel');

async function getUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw err;
    }
}
async function createUsers(req,res){
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log('error')
        res.status(400).json({ message: error.message });
    }
}
async function deleteUsers(req,res){
    try {
        const deletedUser = await User.findByIdAndDelete(req);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function updateUsers(id,req,res){
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function deleteUser_Account(userId,accountId,res){
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const cuenta = await Cuenta.findById(accountId);
        if (!cuenta) {
            return res.status(404).json({ message: 'Cuenta no encontrada' });
        }

        // Verificar si la cuenta está asociada al usuario
        const cuentaIndex = user.cuentas.findIndex(cuentaId => cuentaId.toString() === accountId);
        if (cuentaIndex === -1) {
            return res.status(404).json({ message: 'La cuenta no está asociada a este usuario' });
        }

        // Quitar la cuenta de la lista de cuentas del usuario
        user.cuentas.pull(accountId);
        await user.save();

        // Quitar al usuario de la lista de titulares de la cuenta
        cuenta.titulares.pull(userId);
        await cuenta.save();

        // Verificar si todavía hay titulares en la cuenta
        if (cuenta.titulares.length === 0) {
            cuenta.tipo_cuenta += '_inactiva';
            await cuenta.save();
        }

        res.json({ message: 'Cuenta eliminada correctamente del usuario' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports = {
    getUsers,
    createUsers,
    deleteUsers,
    deleteUser_Account,
    updateUsers
}
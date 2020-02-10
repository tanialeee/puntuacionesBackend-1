var Usuario = require('../models/usuario')

async function getAll(req,res){
    try{
        let usuarios = await Usuario.find()
        res.status(200).send({accion:'get all', datos:usuarios})

    }catch(err){
        res.status(500).send({accion:'get all', mensaje:`error al obtener el usuario ${err}`})
    }
}

async function insert(req,res){
    try{
        var usuario = new Usuario(req.body);
        usuario._id=undefined;
        let usuarioGuardado = await usuario.save()
        res.status(200).send({accion:'save', datos:usuarioGuardado})

    }catch(err){
        res.status(500).send({accion:'save', mensaje:`Error al guardar el usuario ${err}`})

    }
}

async function remove(req,res){
    try{
        let usuarioId = req.params.id;
        let usuarioBorrado = await Usuario.findByIdAndRemove(usuarioId)
        if(!usuarioBorrado){
            return res.status(404).send({accion:'delete',mensaje:'Error el id a borrar no existe'})

        }
        res.status(200).send({accion:'remove', datos:usuarioBorrado})

    }catch(err){
        res.status(500).send({accion:'remove', mensaje:`Error al borrar el usuario ${err}`})

    }
}

async function update(req,res){
    try{
        var datos = req.body;
        let usuarioId = req.params.id;
        let usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId,datos)
        if(!usuarioActualizado){
            return res.status(404).send({accion:'update',mensaje:'Error el id a actualizar no existe'})

        }
        res.status(200).send({accion:'update', datos:usuarioActualizado})

    }catch(err){
        res.status(500).send({accion:'update', mensaje:`Error al modificar el usuario ${err}`})

    }
}

async function getById(req,res){
    try{
        let usuarioId = req.params.id;
        let usuario = await Usuario.findById(usuarioId)
        res.status(200).send({accion:'get one', datos:usuario})

    }catch(err){
        res.status(500).send({accion:'get one', mensaje:`error al obtener el usuario ${err}`})

    }
}

async function login (req,res){
    res.status(200).send({accion:'insert', mensaje:"Funcion no Implementada"})
}

async function logOut(req,res){
    res.status(200).send({accion:'get', mensaje:"Funcion no Implementada"})

}

module.exports = {getAll,getById,insert,remove,update}
const connection =require('../config/connection')

let list = (req,res) =>{
    connection.query(`SELECT * FROM estudiantes`,(err,results)=>{
        if(err){
            console.log(err);
        }
        const response={
            status:200,
            values:results
        }
        res.json(response);
        res.end();
    })
}
let listById = (req,res) =>{
    const id=req.params.id;
    connection.query(`SELECT * FROM estudiantes WHERE id=${id}`,(err,results)=>{
        if(err){
            console.log(err);
        }
        const response={
            status:200,
            values:results
        }
        res.json(response);
        res.end();
    })
}

let create = (req,res) =>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const programa=req.body.programa;
    const telefono=req.body.telefono;
    const direccion=req.body.direccion;
    connection.query(`INSERT INTO estudiantes (nombre, apellido, programa, telefono,direccion) VALUES ('${nombre}','${apellido}','${programa}','${telefono}','${direccion}')`,(err,results)=>{
        if(err){
            console.log(err);
        }
        const response={
            status:200,
            values:results
        }
        res.json(response);
        res.end();
    })
}

let update = (req,res) =>{
    const id=req.params.id;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const programa=req.body.programa;
    const telefono=req.body.telefono;
    const direccion=req.body.direccion;
    connection.query(`UPDATE estudiantes SET nombre='${nombre}',apellido='${apellido}',programa='${programa}',telefono='${telefono}',direccion='${direccion}' WHERE id='${id}'`,(err,results)=>{
        if(err){
            console.log(err);
        }
        const response={
            status:200,
            values:results
        }
        res.json(response);
        res.end();
    })
}

let deleteRegister = (req,res) =>{
    const id=req.params.id;
    connection.query(`DELETE FROM estudiantes WHERE id=${id}`,(err,results)=>{
        if(err){
            console.log(err);
        }
        const response={
            status:200,
            values:results
        }
        res.json(response);
        res.end();
    })
}

module.exports={list,listById,create,update,deleteRegister}
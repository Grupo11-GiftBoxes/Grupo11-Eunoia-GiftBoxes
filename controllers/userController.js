const { json } = require("express");
const fs = require('fs');
const { validationResult } = require('express-validator')

const userController = {
    'login': function(req, res){
        return res.render('login')
    },
    'register': function(req, res) {
        return res.render('register');
    },
    'list': function(req, res) {
        let archivoJSON= fs.readFileSync('usuarios.json',{encoding: 'utf-8'});
        let users= JSON.parse(archivoJSON);
        res.render('usersList',{'users': users});
    },
    'search':function(req, res){
        /* para obtener informacion de un formulario siempre tengo que empezar con > req.query < el segundo = .query indicia la propiedad o el campo que me quiero trae del formulario */
        let loQueBusque= req.query.search;
        // busco dentro del archivo de usuarios.json
        let archivoJSON= fs.readFileSync('usuarios.json',{encoding: 'utf-8'});
        let users= JSON.parse(archivoJSON);
        let userResult= [];
        for (let i= 0; i<users.length; i++) {
            if (users[id].includes(loQueBusque)){
                userResult.push(users[id]); 
            }
        }

    res.render('userResult',{userResult: userResult})
}, 
    'create':function(req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()) 
        {
            let usuario = {
                nombre: req.body.name,
                email: req.body.email,
                contraseña: req.body.password,
                image: req.file.filename,
                }; 
                    //GUARDAR USUARIOS
                    /// ---- PRIMERO LEER LO QUE YA HABIA
                    let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
                    let usuarios;
                    if (archivoUsuario == "") {
                        usuarios = [];
                    }else {
                        usuarios =JSON.parse(archivoUsuario);
                    };
                    usuarios.push(usuario);
                    usersJSON= JSON.stringify(usuarios);
                    fs.writeFileSync('usuarios.json', usersJSON);
                    res.redirect("/users/list");
        } else 
        {
                     res.render('index');
            }
        },
    'edit': function(req, res) {
        let idUser= req.params.idUser;
        let users= [
                    {id:1, name:'Romina'},
                    {id:2, name:'Azul'},
                    {id:3, name:'Pablo'},
                    {id:4, name:'Riki'},
                    {id:5, name:'Anto'},
                    {id:6, name:'Bruno'},
                    {id:7, name:'Alai'},
                    {id:8, name:'Mateo'},
                    ];
        let usertoEdit= users[idUser]
        // res.send(usertoEdit)
        res.render('userEdit', {usertoEdit:usertoEdit});
    },
    'edit': function(req, res) {
        return res.send('PUT')
    },
    'delete': function(req, res){
        return res.send("soy delete")
      },
};

    module.exports= userController

    // 'create': (req,res)=> {
    //  res.send(req.body.Name) Aca me traigo con el req => el Body del formulario, si lo dejo solo, me trae todos los campos como objetoo literal, sino puedo agregar = .Name o la propiedad de que quiera del los nombre de los input que defini en el formulario

    /* IMPORTANTE POR QUE LA INFORMACION VIAJO POR POST USO = BODY si en cambio hubiese venido por GET uso = QUERY*/
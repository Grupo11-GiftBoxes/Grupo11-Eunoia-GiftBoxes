const { Router } = require('express');
var express = require('express');
var router = express.Router();
const userController= require('../controllers/userController');
const multer = require('multer');
const path = require ('path');
const { body } = require('express-validator');
const validacionesRegistro= 
[
  body('name').notEmpty(),
  body('email').notEmpty().withMessage('es obligatorio ingresar un mail').isEmail(),
  body('password').notEmpty(),
  body('imagenUsuario').notEmpty(),
]


// Configuro con Multer el lugar donde guardo mis archivos
const storage= multer.diskStorage({
  destination: (req, file,cb) => {
    cb(null, path.join (__dirname, "../public/images/groups"));
  },
  // defino el nombre del archivo donde voy a guardar
  filename: (req, file,cb) => {
    console.log(file);
    const newFileName ="group-" + Date.now() + path.extname(file.originalname);
    cb(null,newFileName );
  }
});
//ejecucion de multer
const upload = multer({storage: storage})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*------routers for users--------*/



router.get('/login', userController.login)
router.get('/register', userController.register); 
router.post('/register', upload.single('imagenUsuario'),validacionesRegistro,  userController.create);
router.get('/list', userController.list); /*falta crear el controlador*/
router.get('/search', userController.search);
router.get('/edit/:idUser', userController.edit);
router.put('/edit', function(req, res) {
  res.send('Hi')});
router.delete('/delete', function(req, res){
  res.send("soy delete")
})

module.exports = router;

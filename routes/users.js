var express = require('express');
var router = express.Router();

const userController= require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*------routers for users--------*/

router.get('/register', userController.register); 
//router.get('/login', userController.login); /*falta crear el controlador*/
router.get('/list', userController.list); /*falta crear el controlador*/


module.exports = router;

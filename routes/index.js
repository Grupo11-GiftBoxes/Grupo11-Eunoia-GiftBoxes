var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')

router.get('/', mainController.index);

router.get('/pruebaSession', function (req, res){
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas=0;
    }
    req.session.numeroVisitas++;
    res.send('sesion tiene en #' + req.session.numeroVisitas)})

module.exports = router;

import express from 'express';
import loginController from '../controllers/loginController';
import resetpasswordController from '../controllers/resetpasswordController';
 import settingsController from '../controllers/settingsController';

export default express.Router()
    .get('/' ,  function(req, res, next) {
        res.render('index',{ message: '' });
    })
    .post('/',loginController.login)
    .get('/addtype',function(req, res, next){
        res.render('addtype',{message: ''});
    })
    .post('/addtype',settingsController.addtype)
    .get('/addinsurance',function(req, res, next){
        res.render('addinsurance',{message: ''});
    })
    .get('/addservices',function(req, res, next){
        res.render('addservices',{message: ''});
    })
    .get('/addtype',settingsController.addtype)
    .get('/edittype/:id',settingsController.edittype)
    .post('/edittype/:id',settingsController.updatetype)
    .get('/deletetype/:id',settingsController.deletetype)
    .get('/listtype',settingsController.listtype)
    .post('/addinsurance',settingsController.addinsurance)
    .get('/editinsurance/:id',settingsController.editinsurance)
    .post('/editinsurance/:id',settingsController.updateinsurance)
    .get('/deletetype/:id',settingsController.deletetype)
    .get('/listinsurance',settingsController.listinsurance)
    
    
    .get('/listservices',function(req, res, next){
        res.render('listservices',{message: ''});
    })
    .get('/listinsurance',function(req, res, next){
        res.render('listinsurance',{message: ''});
    })
    .get('/reset/:email',function(req, res, next) {
        res.render('reset',{ message: '' });
    })
    .post('/reset/:email',resetpasswordController.reset)
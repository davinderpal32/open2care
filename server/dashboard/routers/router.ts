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
        res.render('addtype',{message: 'Login successfully'});
    })
    .get('/addinsurance',function(req, res, next){
        res.render('addinsurance',{message: 'Login successfully'});
    })
    .get('/addservices',function(req, res, next){
        res.render('addservices',{message: 'Login successfully'});
    })
    .get('/listtype',function(req, res, next){
        res.render('listtype',{message: 'Login successfully'});
    })
    .get('/listservices',function(req, res, next){
        res.render('listservices',{message: 'Login successfully'});
    })
    .get('/listinsurance',function(req, res, next){
        res.render('listinsurance',{message: 'Login successfully'});
    })
    .get('/reset/:email',function(req, res, next) {
        res.render('reset',{ message: '' });
    })
    .post('/reset/:email',resetpasswordController.reset)
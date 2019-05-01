import express from 'express';
import loginController from '../controllers/loginController';
import resetpasswordController from '../controllers/resetpasswordController'

export default express.Router()
    .get('/' ,  function(req, res, next) {
        res.render('index',{ message: '' });
    })
    .post('/',loginController.login)
    .get('/reset/:email',function(req, res, next) {
        res.render('reset',{ message: '' });
    })
    .post('/reset/:email',resetpasswordController.reset)
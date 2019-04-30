import express from 'express';
import controller from '../controllers/loginController'

export default express.Router()
    .get('/' ,  function(req, res, next) {
        res.render('index',{ message: '' });
    })
    .post('/',controller.login)

import express from 'express';
import controller from '../controllers/loginController'

export default express.Router()
    .get('/' , controller.login);

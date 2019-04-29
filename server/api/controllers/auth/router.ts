import express from 'express';
import controller from './controller';
import { checkJwt } from '../../../middleware/login';

export default express.Router()
    .post('/careCenterRegister' , controller.careCenterRegister)
    .post('/login' , controller.login)
    .get('/forgetPassword/:email' ,controller.forgetPassword )
    .put('/resetPassword', checkJwt , controller.resetPassword);

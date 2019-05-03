import express from 'express';
import controller from './controller';
import { checkJwt } from '../../../middleware/login';

export default express.Router()
    .post('/careCenterRegister' , controller.careCenterRegister)
    .post('/careCenterlogin' , controller.careCenterlogin)
    .post('/forgetPassword' ,controller.forgetPassword )
    .put('/resetPassword', checkJwt , controller.resetPassword)
    .post('/patientRegister' , controller.patientRegister);

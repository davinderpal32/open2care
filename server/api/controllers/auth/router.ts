import express from 'express';
import controller from './controller';
import { checkJwt } from '../../../middleware/login';
// import { upload } from '../../../middleware/fileUpload';
var multer  = require('multer');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         //console.log(req.body) // YAY, IT'S POPULATED
//         cb(null, 'listing-pics/')
//     },                    
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }                     
// });                     
// const upload = multer({ storage: 'uploads/' });  


export default express.Router()
    // .post('/careCenterRegister' , upload.single('image') , controller.careCenterRegister)
    .post('/careCenterlogin' , controller.careCenterlogin)
    .post('/forgetPassword' ,controller.forgetPassword )
    .put('/resetPassword', checkJwt , controller.resetPassword)
    .post('/patientRegister' , controller.patientRegister)

import express from 'express';
import controller from './controller'
import { checkJwt } from '../../../middleware/login';

export default express.Router()
    .post('/', checkJwt , controller.create)
    .get('/', checkJwt, controller.all)
    .get('/:id', checkJwt, controller.byId);

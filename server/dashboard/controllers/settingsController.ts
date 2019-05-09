import loginService from '../services/login.service';
import settingsService from '../services/settings.service';
import { Request, Response } from 'express';

export class settingsController {
 
  addtype(req: Request, res: Response): void {
    settingsService.addtype(req.body).then(r =>{
      if(r.error == false){
        res.redirect('listtype');
      }else{
        res.render('addtype',{message: r.message});
      }
    });
  }


  listtype(req: Request, res: Response): void {
    settingsService.listtype().then(r =>{
      if(r.error == false){
        res.render('listtype',{message: r.message,data: r.data});
      }else{
        res.render('addtype',{message: r.message});
      }
    });
  }


  edittype(req: Request, res: Response): void {
    var id = req.params.id;
    settingsService.edittype(id).then(r =>{
      if(r.error == false){
        res.render('edittype',{message: r.message,data: r.data});
      }else{
        res.render('listtype',{message: r.message});
      }
    });
  }

  updatetype(req: Request, res: Response): void {
    console.log(req.params)
    var data = {
      id : req.params.id,
      typename : req.body.typeName
    }
    settingsService.updatetype(data).then(r =>{
      if(r.error == false){
        // res.render('listtype',{message: r.message,data: r.data});
        res.redirect('/listtype');
      }else{
        res.render('edittype',{message: r.message});
      }
    });
  }

  deletetype(req: Request, res: Response): void {
    var id = req.params.id;
    settingsService.deletetype(id).then(r =>{
      if(r.error == false){
        // res.render('listtype',{message: r.message,data: r.data});
        res.redirect('/listtype');
      }else{
        res.render('edittype',{message: r.message});
      }
    });
  }


  addinsurance(req: Request, res: Response): void {
    settingsService.addinsurance(req.body).then(r =>{
      if(r.error == false){
        res.redirect('listinsurance');
      }else{
        res.render('addinsurance',{message: r.message});
      }
    });
  }


  listinsurance(req: Request, res: Response): void {
    settingsService.listinsurance().then(r =>{
      if(r.error == false){
        res.render('listinsurance',{message: r.message,data: r.data});
      }else{
        res.render('addinsurance',{message: r.message});
      }
    });
  }


  editinsurance(req: Request, res: Response): void {
    var id = req.params.id;
    settingsService.editinsurance(id).then(r =>{
      if(r.error == false){
        res.render('editinsurance',{message: r.message,data: r.data});
      }else{
        res.render('listinsurance',{message: r.message});
      }
    });
  }

  updateinsurance(req: Request, res: Response): void {
    console.log(req.params)
    var data = {
      id : req.params.id,
      typename : req.body.typeName
    }
    settingsService.updatetype(data).then(r =>{
      if(r.error == false){
        // res.render('listtype',{message: r.message,data: r.data});
        res.redirect('/listinsurance');
      }else{
        res.render('editinsurance',{message: r.message});
      }
    });
  }

  deleteinsurance(req: Request, res: Response): void {
    var id = req.params.id;
    settingsService.deleteinsurance(id).then(r =>{
      if(r.error == false){
        // res.render('listtype',{message: r.message,data: r.data});
        res.redirect('/listinsurance');
      }else{
        res.render('editinsurance',{message: r.message});
      }
    });
  }



}
export default new settingsController();

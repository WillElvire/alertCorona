import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service'; 
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase'; 
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  myform:FormGroup;
  constructor(private builder:FormBuilder,private auth:AuthentificationService,private toast:ToastController) { }

  ngOnInit() {

     this.myform=this.builder.group({


          email:["",Validators.required],
          password:["",Validators.required]
       
     })
  }


  onSubmit(){

   

             this.verifyMydata(this.myform.get("email").value,this.myform.get("password").value);
 

  }


   verifyMydata(email:string,password:string){


    return new Promise((resolve,reject)=>{

           
          this.auth.ConnecteUser(email,password).then((user)=>{


                resolve(user);

          },

          async (error)=>{

                 this.toast.create({
                    message:error,
                    duration:5000,
                    color:'danger'
                 }).then( (value)=>{

                      value.present();
                 },
                  (error)=>{

                        console.log(error);
                  })

                 



          }


          )


    })

  }

}

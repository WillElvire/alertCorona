import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { ToastController } from '@ionic/angular'; 
import * as firebase from 'firebase';
import { Subject } from "rxjs";
import DataSnapshot=firebase.database.DataSnapshot;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatafinderService } from '../service/datafinder.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {


 
  myform:FormGroup;
  message:string;
  contact:string;

  longitude:any;
  latitude:any;
  data:any;

  constructor(private builder:FormBuilder,private datasaver:DatafinderService,private  auth:AuthentificationService,private toast:ToastController,private geolocation:Geolocation) { 


              //on recupere la localisation de l'utilisateur
               this.geolocation.getCurrentPosition().then((resp)=>{

                  this.longitude=resp.coords.longitude;
                  this.latitude=resp.coords.latitude;


               }).catch((error) => {

                    this.toastShower(error,5000);
              });
   

       


  }

  ngOnInit() {
   
             //le data de l'utilisateur
             this.myform=this.builder.group({


                 name:["",Validators.required],

                 prenom:["",Validators.required],

                 phone:["",Validators.required],

                 email:["",Validators.required],

                 password:["",Validators.required],

                 localisation:["",Validators.required],
             })     
  }

 async onSubmit(){

   this.data={

     nom:this.myform.get("name").value,
     prenom:this.myform.get("prenom").value,
     email:this.myform.get("email").value,
     location:this.myform.get("localisation").value,
     phone:this.myform.get("phone").value,
     longitude:this.longitude,
     latitude:this.latitude,
     password:this.myform.get("password").value
   }


   
   if(this.myform.get("phone").value.length!=8){
      
        this.contact="numero de téléphone invalide ";

   }else{

       this.createUser(this.myform.get("email").value,this.myform.get("password").value);
       
      
  
   }

 }


 createUser(email,password){


     return new Promise((resolve,reject)=>{

          this.auth.CreateUser(email,password).then(


            (user)=>{

                resolve(user);
                this.SaveDataOnDatabase(this.data);
                 this.datasaver.putData(this.data).then(

                    (value)=>{

                    },
                    async (error)=>{
                             
                             this.toastShower("probleme de stockage",5000).then((v)=>v.present());

                    })


            },

            async(error)=>{

                    this.toastShower(error,5000).then((v)=>v.present());

                    console.log("error \t"+this.message);


            }

          );
     });     
      
 }

 SaveDataOnDatabase(data){

   return new Promise((resolve,reject)=>{


       this.auth.SaveData(data).then( (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        })

   })
 }

async toastShower(message,duration){

   
    return this.toast.create({

            message:message,
            duration:duration,
            color:'danger',
    });
  

}

}

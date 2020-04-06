import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {


 
  myform:FormGroup;


  constructor(private builder:FormBuilder) { 


    
  



  }

  ngOnInit() {



             this.myform=this.builder.group({


                 name:["",Validators.required],

                 prenom:["",Validators.required],

                 phone:["",Validators.required],



             })


  
       
  }



 onSubmit(){


   
   console.log(this.myform.value);



 }

}

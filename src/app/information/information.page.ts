import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  
   @ViewChild('mychart') mychart;
  country:any;
  graph:any;
  detail:any;
  nom:any;

  constructor(private route:ActivatedRoute,private service:CovidService,private toast:ToastController) {


     this.country=this.route.snapshot.paramMap.get('pays');

     this.presentMyToast();

     this.service.getCountryData(this.country).subscribe(


         (data)=>{

              this.detail=data;

              

              this.nom=this.detail[0].Country;


              if(this.nom==undefined){


                 this.presentMyToast();

              }


              this.createBarChart();

         },

         (error)=>{



           this.presentMyToast();

              
         }


       ); 


  }

  
  ngOnInit() {

    

  }


  createBarChart() {

    if(this.nom!=undefined){

          this.graph = new Chart(this.mychart.nativeElement, {
            type: 'bar',
            data: {
              labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
              datasets: [{
                label: 'Viewers in millions',
                data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

   }


  
  }


  async presentMyToast(){



     

          const toasts = await this.toast.create({
                      
                      message: 'Erreur lors du chargement des données',
                      duration: 10000,
           });
                    
          toasts.present();

             


  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.page.html',
  styleUrls: ['./actuality.page.scss'],
})
export class ActualityPage implements OnInit {
  currentIndex: number;
  avatars = [
  {
    name: 'Donald Trump',
    age: 73,
    image: '../../assets/logo.png',
    visible: true
  },
  {
    name: 'Barack Obama',
    age: 58,
    image: '../../assets/screen.png',
    visible: true
  },
  {
    name: 'Elon Musk',
    age: 48,
    image: '../../assets/logo.png',
    visible: true
  },
  
];
  constructor() {

   this.currentIndex = this.avatars.length - 1;
  console.log(this.currentIndex);
 
   }

  ngOnInit() {
  }


  swiped(event: any, index: number) {
  console.log(this.avatars[index].name + ' swiped ' + event);
  this.avatars[index].visible = false;
  this.currentIndex--;
  if(this.currentIndex==0){

       this.currentIndex=this.avatars.length-1;
  }
}

swiperight() {
  this.avatars[this.currentIndex].visible = false;
  this.currentIndex--;
}

swipeleft(){

 this.avatars[this.currentIndex].visible = false;
  this.currentIndex--;

}





}

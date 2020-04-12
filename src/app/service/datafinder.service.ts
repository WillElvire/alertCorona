import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Injectable({
  providedIn: 'root'
})
export class DatafinderService {

  constructor(private sotrage:NativeStorage) { }

 //putData on native storage
  putData(value){

     return this.sotrage.setItem("data",value);
  }
  //getNative sotrage data
  getData(){

    return this.sotrage.getItem("data");

  }
}

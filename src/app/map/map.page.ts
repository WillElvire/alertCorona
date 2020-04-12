import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import L from "leaflet";

import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: L.Map;
  center: L.PointTuple;
  startCoords:any;
  constructor(public geolocation:Geolocation,public platform:Platform) {
        
        this.center = this.startCoords;
    this.platform.ready().then(() =>
    { 
      this.geolocation.getCurrentPosition().then((resp)=>{

          this.startCoords=[resp.coords.latitude,resp.coords.longitude];

          this.leafletMap(resp.coords.latitude,resp.coords.longitude);
      })  
      
    })
        
   }

  ngOnInit() {
  }


  leafletMap(latitude,longitude)
  {
    this.map = L.map('mapId', 
    {
      center: [latitude,longitude],
      zoom: 20
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '', 
    }).addTo(this.map);


    L.marker([latitude,longitude],{title:"Ma localisation"}).bindTooltip("ma position").openTooltip().addTo(this.map);
    L.circle([50.5, 30.5], {radius: 200}).addTo(this.map);


    

    /*L.Routing.control({
      waypoints: [
          L.latLng(51.5, -0.09),
          L.latLng(51.51, -0.047)
      ]
    }).addTo(this.map);*/


}

  


}

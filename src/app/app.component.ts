import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate:any={};
  isAuth:boolean;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routage:Router,
    private auth:AuthentificationService
  ) {
      this.initializeApp();
      this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      var firebaseConfig = {

       
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.storage();
  firebase.firestore();
  firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            //this.routage.navigate(["tabs/tab1"]);
          } else {

            this.isAuth = false;
            //this.routage.navigate(["/authentification"]);
          }
        }
      ); 
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
     this.navigate =
    [
      {
        title : "Accueil",
        url   : "/tabs/tab1",
        icon  : "home"

      },
      {
        title : "recherche",
        url   : "tabs/tab2",
        icon  : "search"
      },
      {
        title : "Plus",
        url   : "tabs/tab3",
        icon  : "pulse"
      },
      {
        title : "Profil",
        url   : "profile",
        icon  : "person"
      },{
        title : "actualty",
        url   : "tabs/actuality",
        icon  : "globe"
      },{
         title:"map",
         url:"map",
         icon:"pin",
      }
    ]
  }


logout(){


     this.auth.signOut();
}

}

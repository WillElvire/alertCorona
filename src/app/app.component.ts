import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate:any={};
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
      this.initializeApp();
      this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
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
        title : "Parametre",
        url   : "tabs/tab3",
        icon  : "settings"
      },
      {
        title : "Profil",
        url   : "tabs/tab3",
        icon  : "person"
      },{
        title : "actualty",
        url   : "tabs/actuality",
        icon  : "globe"
      },
    ]
  }
}

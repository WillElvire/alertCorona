import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'actuality',
    loadChildren: () => import('./actuality/actuality.module').then( m => m.ActualityPageModule)
  },
  {
    path: 'mesure',
    loadChildren: () => import('./mesure/mesure.module').then( m => m.MesurePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

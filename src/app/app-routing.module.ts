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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

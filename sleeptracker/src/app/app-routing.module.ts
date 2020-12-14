import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OvernightPage } from './pages/overnight/overnight.page';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'Overnight',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/overnight/overnight.module').then(m => m.OvernightPageModule)
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Overnight'
      },
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/sleepiness/sleepiness.module').then(m => m.SleepinessPageModule)
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs'
  },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'Overnight', loadChildren: () => import('./pages/overnight/overnight.module').then( m => m.OvernightPageModule)},
  {
    path: 'sleepiness',
    loadChildren: () => import('./pages/sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
  },  {
    path: 'log-history',
    loadChildren: () => import('./pages/log-history/log-history.module').then( m => m.LogHistoryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

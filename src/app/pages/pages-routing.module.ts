import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LayoutComponent } from '../layout/layout.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent, data:{title:'Dashboard'} },
      { path: 'grafica1', component: Grafica1Component, data:{title:'Gráfica #1'} },
      { path: 'progress', component: ProgressComponent, data:{title:'Progress Bar'} },
      { path: 'account-settings', component: AccountSettingsComponent, data:{title:'Account Settings'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

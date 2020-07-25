import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pagenotfound', component: DashboardComponent },
  { path: 'grafica1', component: Grafica1Component },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

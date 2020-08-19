import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';


@NgModule({
  declarations: [ DashboardComponent, ProgressComponent, Grafica1Component, AccountSettingsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }

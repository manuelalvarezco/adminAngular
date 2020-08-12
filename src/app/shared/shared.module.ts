import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IncrementsComponent } from './components/increments/increments.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, SidenavComponent, IncrementsComponent, DoughnutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    BreadcrumbsComponent,
    IncrementsComponent,
    DoughnutComponent

  ]
})
export class SharedModule { }

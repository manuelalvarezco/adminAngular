import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'main',
          url: '/pages/dashboard'
        },
        {
          title: 'ProgressBar',
          url: '/pages/dashboard/progress',
        },
        {
          title:'Gráficas',
          url: '/pages/dashboard/grafica1'
        }
      ]
    }
  ];

  constructor() { }
}

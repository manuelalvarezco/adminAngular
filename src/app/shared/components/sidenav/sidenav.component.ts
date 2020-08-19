import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menuItems: any[];

  constructor(private sidenavService: SidenavService) {
    this.menuItems = this.sidenavService.menu;

    console.log(this.menuItems);

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../core/services/settings/settings.service';

declare function customInitFunction();

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunction();
  }

}

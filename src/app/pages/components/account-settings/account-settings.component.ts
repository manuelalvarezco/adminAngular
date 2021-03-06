import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {




  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.changeCurrentTheme();
  }

  changeTheme(theme: string){

    this.settingsService.changeTheme(theme);
  }



}

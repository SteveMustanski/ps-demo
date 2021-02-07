import { Component, OnInit } from '@angular/core';
import { UserSettings } from "../data/user-settings";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Steve',
    emailOffers: false,
    interfaceStyle: 'medium',
    subscriptionType: 'Monthly',
    notes: 'Just some fancy notes'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

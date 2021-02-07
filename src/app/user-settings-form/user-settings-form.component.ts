import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from "../data/user-settings";
import { DataService } from "../data/data.service";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };

  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    console.log(`in onsubmit: ${form.valid}`)
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }
}

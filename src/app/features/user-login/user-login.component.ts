import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  currentLang: string = 'fa';
}
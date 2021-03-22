import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}

  switchMenu(): Boolean {
    return this.AuthService.isLogged();
  }
  offMenu() {
    return this.AuthService.isLogged() ? true : false;
  }
}

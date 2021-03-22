import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.css'],
})
export class PrivateNavBarComponent implements OnInit {
  logged: Boolean;

  constructor(private AuthService: AuthService, private router: Router) {
    this.logged = this.AuthService.isLogged();
  }

  ngOnInit(): void {}
  signOut() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}

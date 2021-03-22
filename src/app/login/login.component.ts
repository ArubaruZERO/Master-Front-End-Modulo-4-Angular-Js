import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginEntity } from '../model/LoginEntity';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  member: LoginEntity;
  loginForm: FormGroup;
  userControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private AuthService: AuthService
  ) {
    this.createLoginForm();

    this.member = {
      user: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  createLoginForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.userControl = this.loginForm.get('user') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }
  submitForm(event: Event) {
    event.preventDefault();

    this.member = {
      user: this.loginForm.value.user,
      password: this.loginForm.value.password,
    };
    if (this.AuthService.login(this.member)) {
      this.router.navigate(['/dashboard']);
    } else {
      return this.forgotPasswordDialog();
    }
  }
  forgotPasswordDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
  }
}

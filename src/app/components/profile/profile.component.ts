import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  name: string;
  email: string;
  auth: Auth;
  user: User;
  nameValid = true;
  emailValid = true;
  formValid = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    if (!this.auth || !this.auth.isAuthenticated) {
      this.router.navigate(['']);
    }

    this.getUser();
  }

  ngOnChanges() {}

  getUser() {
    const payload: any = {
      token: this.auth.token
    };
    this.userService.getUser(payload).subscribe(response => {
      if (response.status === 'success') {
        this.email = response.body.email;
        this.name = response.body.name;
      }
    });
  }

  update() {
    this.formValidator();

    if (this.formValid) {
      const payload = {
        token: this.auth.token,
        name: this.name,
        email: this.email
      };

      this.userService.updateUser(payload).subscribe(response => {
        if (response.status === 'success') {
          this.updateSnackBar();
        }
      });
    } else {
      this.invalidFormSnackBar();
    }
  }

  logout() {
    localStorage.removeItem('auth');
    window.location.href = 'http://localhost:4200';
  }

  updateSnackBar() {
    this.snackBar.open('UPDATED', 'OK', {
      duration: 2000
    });
  }

  invalidFormSnackBar() {
    this.snackBar.open('INVALID FIELDS', 'OK', {
      duration: 2000
    });
  }

  isEmail(email: string) {
    if (email) {
      const isEmail = email.match(/^.+@.+\..+$/) !== null ? true : false;
      return isEmail;
    }
    return false;
  }

  isRequired(value: string) {
    if (value) {
      const required = value.match(/^.+$/) !== null ? true : false;
      return required;
    }
    return false;
  }

  formValidator() {
    this.formValid = this.email.match(/^.+@.+\..+$/) !== null ? true : false;
    this.formValid = this.email.match(/^.+$/) !== null ? true : false;
    this.formValid = this.name.match(/^.+$/) !== null ? true : false;
  }
}

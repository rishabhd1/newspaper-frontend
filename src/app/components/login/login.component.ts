import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Auth } from '../../models/Auth';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  otp = new FormControl('', [Validators.required]);
  otpSent = false;
  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  getEmailErrorMessage() {
    return this.email.hasError('required')
      ? 'Email is Required'
      : this.email.hasError('email')
      ? 'Not a Valid Email'
      : '';
  }

  getOTPErrorMessage() {
    return this.email.hasError('required')
      ? 'OTP is Required'
      : '';
  }

  getOTP() {
    this.isLoading = true;

    const sendOTPPayload = {
      email: this.email.value
    };

    this.authService.sendOTP(sendOTPPayload).subscribe(response => {
      if (response.status === 'success') {
        this.otpSent = true;
        this.isLoading = false;
      }
    });
  }

  verify() {
    this.isLoading = true;

    const verifyPayload = {
      email: this.email.value,
      otp: this.otp.value
    };

    this.authService.verify(verifyPayload).subscribe(response => {
      if (response.status === 'success') {
        this.otpSent = false;
        this.dialogRef.close();
        const auth: Auth = {
          email: this.email.value,
          token: response.body,
          isAuthenticated: true
        };
        localStorage.setItem('auth', JSON.stringify(auth));
        this.isLoading = false;
      }
    });
  }
}

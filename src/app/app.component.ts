import { Component, OnInit } from '@angular/core';

import { Auth } from './models/Auth';
import { LoginComponent } from './components/login/login.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newspaper-frontend';
  isAuthenticated = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    const user: Auth = JSON.parse(localStorage.getItem('auth'));
    if (user) {
      this.isAuthenticated = user.isAuthenticated;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}

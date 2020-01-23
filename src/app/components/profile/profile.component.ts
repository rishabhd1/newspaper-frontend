import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    const user: Auth = JSON.parse(localStorage.getItem('auth'));
    if (!user || !user.isAuthenticated) {
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('auth');
    window.location.href = 'http://localhost:4200';
  }
}

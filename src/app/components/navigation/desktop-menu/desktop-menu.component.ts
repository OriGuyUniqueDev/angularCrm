import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.css']
})
export class DesktopMenuComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.removeItem('email'), sessionStorage.removeItem('isLoggedIn');
    this.us.logout();
    this.router.navigateByUrl('login');
  }
}

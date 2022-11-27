import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };
  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.us
      .login(this.user)
      .then((data) => {
        this.user = {
          email: '',
          password: '',
        };
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem(
          'email',
          data.user.email?.split('@')[0] as string
        );
        this.router.navigateByUrl('customerDashboard');
      })
      .catch((err) => console.log(err));
  }
  loginWithGoogle() {
    this.us
      .loginGoogle()
      .then((data) => {
        sessionStorage.setItem('email', data.user.displayName as string);
        this.router.navigateByUrl('customerDashboard');
      })
      .catch((err) => console.log(err));
  }
}

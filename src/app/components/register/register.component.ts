import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User = {firstname:'',lastname:'',email:'',password:''}
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.us.register(this.user).then((data) => {
      alert(`Register succsessfull with ${data.user.email}`)
      sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem(
          'email',
          data.user.email?.split('@')[0] as string
        );
        this.router.navigateByUrl('customerDashboard');

    }).catch(err => {
      this.router.navigateByUrl('register');
    })
  }
}

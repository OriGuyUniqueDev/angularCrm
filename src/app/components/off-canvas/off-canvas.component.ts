import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],

})
export class OffCanvasComponent implements OnInit {
  isHide:Boolean=true
  constructor(private us: UserService, private router: Router) {}
  @Output() onHide = new EventEmitter<boolean>();
  setHide() {
    
    this.onHide.emit(false);
  }
  ngOnInit(): void {}
  logout() {
    sessionStorage.removeItem('email'), sessionStorage.removeItem('isLoggedIn');
    this.us.logout();
    this.router.navigateByUrl('login');
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],

})
export class OffCanvasComponent implements OnInit {
  isHide:Boolean=true
  constructor(private us: UserService, private router: Router, private activeOffCanvas:NgbActiveOffcanvas) {}
  setHide() {
    this.activeOffCanvas.close()
  }
  ngOnInit(): void {}
  logout() {
    sessionStorage.removeItem('email'), sessionStorage.removeItem('isLoggedIn');
    this.us.logout();
    this.activeOffCanvas.close()
    this.router.navigateByUrl('login');
  }
}

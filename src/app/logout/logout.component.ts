import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appObj:AppComponent,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    localStorage.removeItem("accesstoken");
    this.appObj.loginstatus=0;
    this.toastr.success('Logout successfully', 'Success');
    this.router.navigate(['/login']);
  }
 
}

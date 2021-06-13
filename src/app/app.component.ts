import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinevideoapp';
  loginstatus:number=0;
  ngOnInit(): void {
    if(localStorage.getItem("accesstoken")==null)
     {
        this.loginstatus=0;
     }
     else
     {
        this.loginstatus=1;
     }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginapiService } from '../loginapi.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any='';
  accesstoken:string='';
  constructor(private fb: FormBuilder,private loginService:LoginapiService,private toastr: ToastrService,private router: Router,private appObj:AppComponent) { }

  ngOnInit(): void {
  }

  public registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern]], 
    pass: ['',[Validators.required]],
  });

  onSubmit(){
    this.loginService.loginApiService(this.registerForm.value.email,this.registerForm.value.pass).subscribe(response => {
      this.data = response;
      if(this.data.status==200){
       // alert(this.data.token);
        this.accesstoken=this.data.token; 
        localStorage.removeItem("accesstoken");
        //console.log(localStorage.getItem("accesstoken"));
        localStorage.setItem("accesstoken",this.accesstoken);
        localStorage.setItem("username",this.data.user[0].name);
        //console.log(localStorage.getItem("accesstoken"));
        this.toastr.success('Login successfully', 'Success');
        //set login status on
        this.appObj.loginstatus=1;
        this.router.navigate(['/myvideos']);
      }
      
    },(error) => {
      this.toastr.error('Invalid email or password', 'Login Error', {
          timeOut: 3000,
        });
    });
    console.log(this.registerForm.value);
  }

  
}

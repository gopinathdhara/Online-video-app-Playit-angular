import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegisterapiService } from '../registerapi.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any='';
  constructor(private fb: FormBuilder,private regApiService:RegisterapiService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public registerForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.pattern]], 
    pass: ['',[Validators.required,Validators.pattern]],
    
  });

  onSubmit(){
    this.regApiService.registerationApiService(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.pass).subscribe(response => {
      this.data = response;
      console.log(this.data);
      this.toastr.success('Registered successfully', 'Success');
      this.registerForm.reset();
    });
    console.log(this.registerForm.value);
  }
}

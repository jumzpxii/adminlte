import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  alert = false;
  constructor(private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLoggedin(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    const {username,password} = this.loginForm.value
    console.log(username + password);

    if(username === 'admin' && password === 'sewioapi'){
      localStorage.setItem('isLoggedin','true');
      this.route.navigate(['/myteam']);
    }else{
      this.alert = true;
    }

  }

}

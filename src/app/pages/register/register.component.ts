import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from '../../shared/players/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  form: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private pds: PlayerService, private router: Router) {
    this.form = this.fb.group({
      pid: this.getUniqueId(1),
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      position: ['',[Validators.required]],
      avatar: null,
    })
  }

  ngOnInit(): void { }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  submitForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.loading = true;

    this.pds.register(this.form.value).subscribe(res => {
      this.loading = false;
      this.router.navigate(['/player']);
    })
    // console.log(this.form.value);
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = 'pid' + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}

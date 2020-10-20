import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from '../shared/players/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private pds: PlayerService, private router: Router) {
    this.form = this.fb.group({
      pid: this.getUniqueId(1),
      fname: '',
      lname: '',
      position: '',
      avatar: null,
    })
  }

  ngOnInit(): void { }

  submitForm() {
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

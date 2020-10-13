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
  tags = [
    { id: '1', name: 'TAG1' },
    { id: '2', name: 'TAG2' },
    { id: '3', name: 'TAG3' },
    { id: '4', name: 'TAG4' },
  ];
  constructor(private fb: FormBuilder, private pds: PlayerService, private router: Router) {
    this.form = this.fb.group({
      fname: '',
      lname: '',
      position: '',
      avatar: null,
      tag: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.loading = true;
    this.pds.register(this.form.value).subscribe(res => {
      this.loading = false;
      this.router.navigate(['/player']);
    })
    // console.log(this.form.value);
  }
}

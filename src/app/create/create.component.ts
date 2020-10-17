import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeamService } from '../shared/teams/team.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  loading = false;
  dataset: FormGroup;
  tagSelected: any = [];
  plySelected: any = [];

  players = [
    { pid: 1, name: 'PlayerA' },
    { pid: 2, name: 'PlayerB' },
    { pid: 3, name: 'PlayerC' },
    { pid: 4, name: 'PlayerD' },
    { pid: 5, name: 'PlayerE' },
  ]
  tags = [
    { tid: 1, name: 'Imu1' },
    { tid: 2, name: 'Imu2' },
    { tid: 3, name: 'Imu3' },
    { tid: 4, name: 'Imu4' },
  ];
  startDate: Date = new Date();
  endDate: Date = new Date();
  format: string = 'dd/MM/yyyy HH:mm';

  constructor(private fb: FormBuilder, private tds: TeamService, private router: Router) {
    this.dataset = this.fb.group({
      teamName: '',
      tag: [this.tagSelected],
      tagName: [this.plySelected],
      startDate: this.startDate,
      endDate: this.endDate,
    })
  }
  ngOnInit(): void { }
  // onChangeTag() {
  //   console.log('Tag->>', this.tagSelected);
  // }
  // onChangePly() {
  //   console.log('Ply->>', this.plySelected);
  // }
  submitForm() {
    this.loading = true;
    this.tds.createTeam(this.dataset.value).subscribe(
      async (res) => {
        if (res) {
          console.log('res->>', res);
          await this.searchAPI(this.dataset.value);
          this.loading = false;
        }
      }, (err) => {
        this.loading = false;
      })
    // console.log(this.dataset.value);
  }
  searchAPI(data: any) {
    this.tds.searApi(data).subscribe(res => {
      console.log('Api=>', res);
    })
  }
  multiData() {

  }
  // output ///
  // lid: [],
  // rid: ["z2"],
  // output: 3,
  // from: "",
  // to: ""

}

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
    { value: 1, label: 'PlayerA' },
    { value: 2, label: 'PlayerB' },
    { value: 3, label: 'PlayerC' },
    { value: 4, label: 'PlayerD' },
    { value: 5, label: 'PlayerE' },
  ]
  tags = [
    { value: '1', label: 'Imu1' },
    { value: '2', label: 'Imu2' },
    { value: '3', label: 'Imu3' },
    { value: '4', label: 'Imu4' },
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
  onChangeTag() {
    console.log('Tag->>', this.tagSelected);
  }
  onChangePly() {
    console.log('Ply->>', this.plySelected);
  }
  submitForm() {
    this.loading = true;
    this.tds.createTeam(this.dataset.value).subscribe(res => {
      if (res) {
        console.log('res->>', res);
        this.searchAPI(this.dataset.value);
        this.loading = false;
      }
    })
    // console.log(this.dataset.value);
  }
  searchAPI(data: any) {
    this.tds.searApi(data).subscribe(res => {
      console.log('Api=>', res);
    })
  }
  // output ///
  // lid: [],
  // rid: ["z2"],
  // output: 3,
  // from: "",
  // to: ""

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeamService } from '../../shared/teams/team.service'
import { Router } from '@angular/router';
import { PlayerService } from '../../shared/players/player.service';

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
  players: any
  tags = [
    { tid: 1, name: 'Imu1' },
    { tid: 2, name: 'Imu2' },
    { tid: 3, name: 'Imu3' },
    { tid: 4, name: 'Imu4' },
  ];
  startDate: Date
  endDate: Date
  format: string = 'dd/MM/yyyy HH:mm';

  constructor(private fb: FormBuilder, private tds: TeamService, private pds: PlayerService, private router: Router) {
    this.dataset = this.fb.group({
      macthId: this.macthRandom(),
      teamName: '',
      tag: [this.tagSelected],
      tagName: [this.plySelected],
      startDate: this.startDate,
      endDate: this.endDate,
    })
  }
  ngOnInit(): void {

    this.pds.getPlayer().subscribe(res => {
      var arr = [];
      const data = res.data;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const ply = {
            pid: data[key].pid,
            fullname: data[key].fname + ' ' + data[key].lname
          }
          arr.push(ply)
        }
      }
      this.players = arr;
    })
  }
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
          this.loading = false;
          await this.router.navigate(['/macth', this.macthRandom()]);
        }
      }, (err) => {
        this.loading = false;
      })
  }

  logS(value: Date) {
    this.startDate = value
  }
  logE(value: Date) {
    this.endDate = value
  }
  macthRandom() {
    let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
    let guid = [u.substr(0, 9)];
    return guid
  }

  // output ///
  // lid: [],
  // rid: ["z2"],
  // output: 3,
  // from: "",
  // to: ""

}

import { Component, OnInit } from '@angular/core';
import { TeamserviceService } from '../shared/teamservice.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  data: any;
  constructor(private tds: TeamserviceService) {
    this.tds.insertTeam('Jumjy', 'xxx@mail.com').subscribe(async (res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  ngOnInit(): void {}
}

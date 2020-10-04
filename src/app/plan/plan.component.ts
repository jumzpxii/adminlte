import { Component, OnInit } from '@angular/core';
import { TeamserviceService } from '../shared/teamservice.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  teamData: any = { status: '', data: '' };
  constructor(private tds: TeamserviceService) {
    this.tds.insertTeam('Jumjy', 'xxx@mail.com').subscribe(async (res) => {
      const { count, tag, zone } = await res.data.zones[0].tags[0];
      this.teamData = {
        status: 'success',
        data: {
          personCount: count / 60,
          personTag: tag,
          personUnit: 'นาที',
          personZone: zone,
        },
      };
      // console.log(typeof this.teamData);
    });
  }

  ngOnInit(): void {}
}

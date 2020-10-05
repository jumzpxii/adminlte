import { Component, OnInit } from '@angular/core';
import { TeamserviceService } from '../shared/teamservice.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  teamData: any = { status: '', data: '' };
  tags:Array<string> = ['Imu1','Imu2','Imu3'];
  tagRecord:any
  tagData:[];
  constructor(private tds: TeamserviceService) {

    // this.tds.insertTeam('Jumjy', 'xxx@mail.com').subscribe(async (res) => {
    //   const { count, tag, zone } = await res.data.zones[0].tags[0];
    //   this.teamData = {
    //     status: 'success',
    //     data: {
    //       personCount: count / 60,
    //       personTag: tag,
    //       personUnit: 'นาที',
    //       personZone: zone,
    //     },
    //   };
    //   // console.log(typeof this.teamData);
    // });
  }

  ngOnInit(): void {}

  getTags(){
    this.tds.getTag(this.tags).subscribe(res=>{
      const data = res.data.zones[0].tags;
      this.tagRecord = data.length;
      this.tagData = data;
    })
  }
  selectItem(t:any){
    this.tds.insertTags(t).subscribe(res=>{
      console.log(res);
    })
  }
}

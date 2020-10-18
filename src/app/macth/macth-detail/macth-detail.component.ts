import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/shared/teams/team.service';
@Component({
  selector: 'app-macth-detail',
  templateUrl: './macth-detail.component.html',
  styleUrls: ['./macth-detail.component.css']
})
export class MacthDetailComponent implements OnInit {
  teamname: string;
  count: number;
  tags: string[] = []
  searchApi: any;
  distance: any;
  speed: any;
  zone: any;
  dataset: any = { tag: [], startMacth: '', endMacth: '' }
  constructor(private routeAc: ActivatedRoute, private tds: TeamService) { }

  ngOnInit(): void {
    let mid = this.routeAc.snapshot.params.mid
    this.tds.getProfileteam(mid).subscribe(res => {
      console.log('res->>', res);
      this.teamname = res[0].team_name;
      this.dataset.startMacth = new Date(res[0].from_start);
      this.dataset.endMacth = new Date(res[0].end_time);
      this.count = res.length;
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key].tag_id;
          this.dataset.tag.push(element)
        }
      }
      this.getAPI(this.dataset);
    })
  }
  getAPI(data: any) {
    this.tds.searApi(data).subscribe((res) => {
      this.distance = res.distanX;
      this.zone = res.zoneX;
      this.speed = res.speedX;
      console.log('this.distance->>', this.distance);
      console.log('this.zone->>', this.zone);
      console.log('this.speed->>', this.speed);
    })
  }

}


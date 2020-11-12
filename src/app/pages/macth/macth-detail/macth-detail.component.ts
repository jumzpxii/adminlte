import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SewioService } from 'src/app/shared/api/sewio.service';
import { TeamService } from 'src/app/shared/teams/team.service';
@Component({
  selector: 'app-macth-detail',
  templateUrl: './macth-detail.component.html',
  styleUrls: ['./macth-detail.component.css']
})
export class MacthDetailComponent implements OnInit {
  players: Array<string> = []
  teamname: string;
  count: number;
  tags: string[] = []
  searchApi: any;
  distance: any = [];
  speed: any = [];
  zone: any = [];
  dataset: any = { tag: [], startMacth: '', endMacth: '' }
  constructor(private routeAc: ActivatedRoute, private tds: TeamService, private ads: SewioService) { }

  ngOnInit(): void {
    let mid = this.routeAc.snapshot.params.mid
    this.tds.getProfileteam(mid).subscribe(res => {
      // console.log('res->>', res);
      this.teamname = res[0].team_name;
      this.dataset.startMacth = new Date(res[0].from_start);
      this.dataset.endMacth = new Date(res[0].end_time);
      this.count = res.length;
      for (const key in res) {
        const plys = res[key].fname + ' ' + res[key].lname
        this.players.push(plys)
      }
      this.getDistan(this.dataset);
      this.getSpeed(this.dataset);
      this.getZone(this.dataset);
    })

  }
  getDistan(data: any) {
    this.ads.distanAPI(data).subscribe(res => {
      let load = res.data;
      for (const key in load) {
        const tagId = load[key].label
        const val = load[key].values.pop().value;
        this.distance.push({ tag: tagId, value: val })
      }
    })
  }
  getSpeed(data: any) {
    this.ads.speedAPI(data).subscribe(res => {
      let load = res.data;
      for (const key in load) {
        const tagId = load[key].label
        const val = load[key].values
        const maxVal = Math.max(...val.map(m => m.value));
        this.speed.push({ tag: tagId, value: maxVal })
      }
    })
  }
  getZone(data: any) {
    this.ads.zoneAPI(data).subscribe(res => {
      this.zone = res.data.zones;
    })
  }












  // getAPI(data: any) {
  //   this.tds.searApi(data).subscribe((res) => {
  //     this.distance = res.distanX;
  //     this.zone = res.zoneX;
  //     this.speed = res.speedX;
  //     console.log('this.distance->>', this.distance);
  //     console.log('this.zone->>', this.zone);
  //     console.log('this.speed->>', this.speed);
  //   })
  // }

}


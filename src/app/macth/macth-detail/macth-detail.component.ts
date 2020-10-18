import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/shared/teams/team.service';
@Component({
  selector: 'app-macth-detail',
  templateUrl: './macth-detail.component.html',
  styleUrls: ['./macth-detail.component.css']
})
export class MacthDetailComponent implements OnInit {
  teamData: any;
  searchApi: any;
  constructor(private routeAc: ActivatedRoute, private tds: TeamService) { }

  ngOnInit(): void {
    let mid = this.routeAc.snapshot.params.mid
    this.tds.getProfileteam(mid).subscribe(res => {
      this.teamData = res
      let mid = res.reduce((r, a) => {
        r[a.mid] = [...r[a.mid] || [], a];
        return this.searchApi = r;
      }, {});
      console.log('mid->>', this.searchApi);
      // this.getAPI(res);
    })
    console.log('this.teamData->>', this.teamData);
  }

  getAPI(data: any) {
    this.tds.searApi(data).subscribe(res => {
      console.log('res->>', res.data);
    })
  }

}

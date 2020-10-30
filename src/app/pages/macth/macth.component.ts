import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../shared/teams/team.service';
@Component({
  selector: 'app-macth',
  templateUrl: './macth.component.html',
  styleUrls: ['./macth.component.css'],
})
export class MacthComponent implements OnInit {
  change: any = [];
  macthData: Array<any> = [];
  constructor(private tds: TeamService) { }

  ngOnInit(): void {
    this.tds.getMyteam().subscribe(res => {
      let mid = res.reduce((r, a) => {
        r[a.mid] = [...r[a.mid] || [], a];
        return this.macthData = r;
      }, {});
      for (const key in this.macthData) {
        this.change.push(this.macthData[key]);
      }
      console.log('this.change->>', this.change);
    })
  }
  onDelMid(mid: string) {
    const el = document.getElementById(mid)
    this.tds.delTeam(mid).subscribe(res => {
      el.remove();
    })
  }
}

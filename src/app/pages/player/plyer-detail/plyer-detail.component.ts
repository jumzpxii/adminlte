import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SewioService } from 'src/app/shared/api/sewio.service';
import { PlayerService } from 'src/app/shared/players/player.service';

@Component({
  selector: 'app-plyer-detail',
  templateUrl: './plyer-detail.component.html',
  styleUrls: ['./plyer-detail.component.css']
})
export class PlyerDetailComponent implements OnInit {
  players: Array<string> = []
  detailPly: any = []
  count: number;
  tags: string[] = []
  searchApi: any;
  distance: any = [];
  speed: any = [];
  zone: any = [];
  player: any = { fname: '', lname: '', id: '', position: '' };
  dataset: any = { tag: [], startMacth: '', endMacth: '' }
  constructor(private pds: PlayerService, private routeAc: ActivatedRoute, private ads: SewioService) { }

  ngOnInit(): void {
    let pid = this.routeAc.snapshot.params.pid
    this.pds.getProfile(pid).subscribe(res => {
      this.detailPly = res;
      const { fname, lname, player, position } = res[0];
      this.player.fname = fname;
      this.player.lname = lname;
      this.player.id = player;
      this.player.position = position;
      for (let index in res) {
        const { tag_id, from_start, end_time } = res[index];
        this.dataset.tag = tag_id
        this.dataset.startMacth = new Date(from_start)
        this.dataset.endMacth = new Date(end_time)
        this.getDistan(this.dataset);
        this.getSpeed(this.dataset);
        this.getZone(this.dataset);
      }
    })
  }

  getDistan(data: any) {
    this.ads.distanAPI(data).subscribe(res => {
      let load = res.data;
      const tagId = load[0].label
      const val = load[0].values.pop().value;
      this.distance.push({ tag: tagId, value: val })
    })
  }
  getSpeed(data: any) {
    this.ads.speedAPI(data).subscribe(res => {
      let load = res.data;
      const tagId = load[0].label
      const val = load[0].values
      const maxVal = Math.max(...val.map(m => m.value));
      this.speed.push({ tag: tagId, value: maxVal })

    })
  }
  getZone(data: any) {
    this.ads.zoneAPI(data).subscribe(res => {
      this.zone = res.data.zones;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/shared/players/player.service';

@Component({
  selector: 'app-plyer-detail',
  templateUrl: './plyer-detail.component.html',
  styleUrls: ['./plyer-detail.component.css']
})
export class PlyerDetailComponent implements OnInit {
  text: string = 'heloow';
  player: any = { fname: '', lname: '', id: '', position: '' };
  constructor(private pds: PlayerService, private routeAc: ActivatedRoute) { }

  ngOnInit(): void {
    let pid = this.routeAc.snapshot.params.pid
    this.pds.getProfile(pid).subscribe(res => {
      console.log('res->>', res);
      const { fname, lname, player, position } = res[0];
      this.player.fname = fname;
      this.player.lname = lname;
      this.player.id = player;
      this.player.position = position;
    })
  }

}

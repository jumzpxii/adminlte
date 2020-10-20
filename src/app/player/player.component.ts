import { Component, OnInit, Renderer2 } from '@angular/core';
import { PlayerService } from '../shared/players/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  num: number = 1;
  mySubscription: any;
  players: Array<string> = []
  dtOptions: DataTables.Settings = {};

  constructor(private pds: PlayerService, private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    const that = this
    this.dtOptions = {
      pageLength: 10,
      ajax: 'http://localhost:3000/player/get',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'fname'
      }, {
        title: 'Last name',
        data: 'lname'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return `<button class="btn btn-primary" view-id="${full.id}">View</button>
                  <button class="btn btn-danger" del-id="${full.id}">Delete</button>`
        }
      }],
    }
  }

  viewPlayer() {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-id")) {
        console.log('event-view>>', event.target.getAttribute("view-id"));
        // this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
  delPlayer() {
    this.renderer.listen('document', 'click', (event) => {
      const delid = event.target.getAttribute("del-id");
      const removeel = event.path[2];
      if (event.target.hasAttribute("del-id")) {
        // console.log('event-del>>', event.target.getAttribute("del-id"));
        this.pds.delPlayer(delid).subscribe(res => {
          this.renderer.removeChild('tr', removeel)
        })
      }
    });
  }
  ngAfterViewInit(): void {
    this.viewPlayer();
    this.delPlayer();
  }

}


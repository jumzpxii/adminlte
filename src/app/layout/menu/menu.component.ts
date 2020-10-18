import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'MyTeam',
      url: '/myteam',
      icon: 'nav-icon fas fa-plus'
    },
    {
      title: 'New Macth',
      url: '/create',
      icon: 'nav-icon fas fa-plus'
    },
    {
      title: 'Players',
      url: '/player',
      icon: 'far fa-circle nav-icon'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'far fa-circle nav-icon'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

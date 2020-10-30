import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-header></app-header>
              <app-menu></app-menu>
              <div class="content-wrapper p-3" style="min-height: 304px;">
                <router-outlet></router-outlet>
              </div>
            <app-footer></app-footer>`,
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

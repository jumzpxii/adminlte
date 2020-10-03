import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngAfterViewInit() {
    $(document).ready(function () {
      $('input[name="daterange"]').daterangepicker();
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works!';

  constructor() { }

  ngAfterViewInit(){
        $(document).ready(function(){
          $("p").click(function(){
          $(this).hide();
          });
        });
  }

  ngOnInit(): void {
  }

  selectDate(){
    $('#reservationtime').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'MM/DD/YYYY hh:mm A'
      }
    })
  }
}

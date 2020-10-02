import { Component, OnInit } from '@angular/core';
import { TeamserviceService } from '../shared/teamservice.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private tds:TeamserviceService) {}

  ngOnInit(): void {
    this.insertData();
  }

  insertData(){
    this.tds.insertTeam('Jumjy','xxx@mail.com').subscribe((res)=>{
      console.log(res);
    })
  }

}

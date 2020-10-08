import { Component, ViewChild,OnInit,ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamserviceService } from '../shared/teamservice.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  loading = false;
  dataset: any = {};
  tag: Array<string> = ['Imu1', 'Imu2', 'Imu3'];
  times: string;
  dropdownList = [];
  selectedItems: Map<string, Array<any>>;
  dropdownSettings = {};
  tags = [
    { id: '1', name: 'TAG1' },
    { id: '2', name: 'TAG2' },
    { id: '3', name: 'TAG3' },
    { id: '4', name: 'TAG4' },
  ];

  constructor(private tds: TeamserviceService, private router: Router) {
    $(document).ready(function () {
      $('#daterange').daterangepicker({
        timePicker: true,
        timePicker24Hour: true,
        timePickerSeconds: true,
        locale: {
          format: 'DD/M/Y HH:mm น.',
          language: 'th',
        },
      });
    });
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.selectedItems = new Map<string, Array<any>>();
    // this.tags
    this.dropdownList = [
      { id: 1, itemName: 'PlayerA' },
      { id: 2, itemName: 'PlayerB' },
      { id: 3, itemName: 'PlayerC' },
      { id: 4, itemName: 'PlayerD' },
      { id: 5, itemName: 'PlayerE' },
    ];

    this.dropdownSettings = {
      singleSelection: true,
      text: 'Select Player',
      enableSearchFilter: true,
      classes: '',
    };

    console.log(this.selectedItems);
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log("delte",item);
    console.log(this.selectedItems);
  }

  onDeSelectAll(items: any){
      console.log(items);
  }



  onSubmit(val: any) {
    let selectElement = document.querySelector<HTMLInputElement>(
      'input[name="times"]'
    );
    let selectedValue = selectElement.value;
    console.log(selectedValue);
    this.dataset = val;
    console.log(this.dataset);
  }

  getTags() {
    this.loading = true;
    this.tds.getTag(this.tag).subscribe((res) => {
      this.loading = false;
      this.router.navigate(['/macth']);
    },(err)=>{
      this.loading = false;
    });
  }
}

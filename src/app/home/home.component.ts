import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataset:any;
  dropdownList = [];
  selectedItems: Map<string, Array<any>>;
  dropdownSettings = {};
  tags = [
    { id: '1', name: 'TAG1' },
    { id: '2', name: 'TAG2' },
    { id: '3', name: 'TAG3' },
    { id: '4', name: 'TAG4' },
  ];

  constructor() {}


  ngAfterViewInit() {
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

  ngOnInit(): void {
    this.selectedItems = new Map<string, Array<any>>();
    // this.tags
    this.dropdownList = [
                          { id: 1, itemName: 'PlayerA'},
                          { id: 2, itemName: 'PlayerB'},
                          { id: 3, itemName: 'PlayerC'},
                          { id: 4, itemName: 'PlayerD'},
                          { id: 5, itemName: 'PlayerE'},
                        ];

    this.dropdownSettings = {
                              singleSelection: true,
                              text:"Select Player",
                              enableSearchFilter: true,
                              classes:"from-control"
                            };

                      console.log(this.selectedItems)
  }
  onItemSelect(item:any){
      console.log(item["itemName"]);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }

  submitTag(e:any){
    console.log(e);
  }

  onSubmit(val:any){
    console.log(val.times);

    // this.dataset = val;
    // console.log(this.dataset);

    // const data = val.map(res => res.json())
    // console.log(data);

  }
}

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgForm, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  dataApi: any = {
    lid: [],
    rid: ["z2"],
    output: 3,
    from: "",
    to: ""
  };
  tag: Array<string> = ['Imu1', 'Imu2', 'Imu3'];
  times: string;
  dropdownList = [
    { id: 1, itemName: 'PlayerA' },
    { id: 2, itemName: 'PlayerB' },
    { id: 3, itemName: 'PlayerC' },
    { id: 4, itemName: 'PlayerD' },
    { id: 5, itemName: 'PlayerE' },
  ];

  dropdownSettings = {
    singleSelection: true,
    text: 'Select Player',
    enableSearchFilter: true,
    classes: '',
  };
  selectedItems: Map<string, Array<any>>;
  tags = [
    { id: '1', name: 'TAG1' },
    { id: '2', name: 'TAG2' },
    { id: '3', name: 'TAG3' },
    { id: '4', name: 'TAG4' },
  ];

  startDate: Date = new Date();
  endDate: Date = new Date();
  format: string = 'dd/MM/yyyy HH:mm';
  name = new FormControl('');
  constructor(private tds: TeamserviceService, private router: Router) { }

  ngAfterViewInit() { }

  ngOnInit(): void {
    this.selectedItems = new Map<string, Array<any>>();

    this.tags

    console.log(this.selectedItems);
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item)
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log('OnItemDeSelect', item);
  }

  onDeSelectAll(items: any) {
    console.log('onDeSelectAll->>', items);
  }

  onSubmit(val: any) {
    console.log('val->>', val);
    console.log('Start', this.startDate);
    console.log('End', this.endDate);

    // let selectElement = document.querySelector<HTMLInputElement>(
    //   'input[name="times"]'
    // );
    // let selectedValue = selectElement.value;
    // console.log(selectedValue);
    // this.dataset = val;
    // console.log(this.dataset);
  }

  getTags() {
    this.loading = true;
    this.tds.getTag(this.tag).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['/macth']);
      },
      (err) => {
        this.loading = false;
      }
    );
  }

}

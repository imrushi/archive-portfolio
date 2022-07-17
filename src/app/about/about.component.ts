import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {}
  edu_work:boolean = true;
  ngOnInit(): void {
    
  }
  
  changeE() {
    this.edu_work = false;
  }

  changeW() {
    this.edu_work = true;
  }

}

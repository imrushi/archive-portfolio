import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailadd: string = 'rushipanchariya19@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
	emailadd: string = 'rushipanchariya19@gmail.com';
	currentYear = new Date();
	year: number;

	constructor() {}
	ngOnInit(): void {
		this.year = this.currentYear.getFullYear();
	}
	knowMore(section) {
		document.querySelector('#' + section).scrollIntoView({ block: 'start', behavior: 'smooth' });
	}
}

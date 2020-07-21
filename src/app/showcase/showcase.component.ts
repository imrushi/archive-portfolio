import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-showcase',
	templateUrl: './showcase.component.html',
	styleUrls: [ './showcase.component.scss' ]
})
export class ShowcaseComponent implements OnInit {
	greet: string;
	date = new Date();

	constructor() {}

	ngOnInit(): void {
		let hrs = this.date.getHours();
		if (hrs < 12) {
			this.greet = 'Morning';
		} else if (hrs >= 12 && hrs <= 16) {
			this.greet = 'Afternoon';
		} else if (hrs >= 17 && hrs <= 24) {
			this.greet = 'Evening';
		}
	}

	knowMore(section) {
		document.querySelector('#' + section).scrollIntoView({ block: 'start', behavior: 'smooth' });
	}
}

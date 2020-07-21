import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor() {}
	isCollapsed = false;
	// home = 'inactive';
	// about = 'inactive';
	// pro = 'inactive';
	// con = 'inactive';
	ngOnInit(): void {}
	currentSection = 'showcase';

	onSectionChange(sectionId: string) {}

	scrollTo(section) {
		this.currentSection = section;
		// if (this.currentSection === 'showcase') {
		// 	this.home = 'active';
		// } else if (this.currentSection === 'about') {
		// 	this.about = 'active';
		// } else if (this.currentSection === 'projects') {
		// 	this.pro = 'active';
		// } else if (this.currentSection === 'contact') {
		// 	this.con = 'active';
		// }

		document.querySelector('#' + section).scrollIntoView({ block: 'start', behavior: 'smooth' });
	}
}

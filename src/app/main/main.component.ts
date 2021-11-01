import { Component } from '@angular/core';

@Component({
	selector: 'main-root',
	templateUrl: './main.component.html',
})
export class MainComponent {
	// title = 'Rushi Panchariya | Dev';

	currentSection = 'showcase';

	onSectionChange(sectionId: string) {
		this.currentSection = sectionId;
	}
}

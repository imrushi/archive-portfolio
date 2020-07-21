import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	// title = 'Rushi Panchariya | Dev';

	currentSection = 'showcase';

	onSectionChange(sectionId: string) {
		this.currentSection = sectionId;
	}
}

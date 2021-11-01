import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ AlertComponent, LoadingSpinnerComponent ],
	imports: [ CommonModule ],
	exports: [ AlertComponent, LoadingSpinnerComponent, CommonModule ],
	// entryComponents: [
	// 	AlertComponent
	// ]
})
export class SharedModule {}

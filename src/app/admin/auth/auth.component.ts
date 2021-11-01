import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, from, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnDestroy {
	isLoginMode = true;
	isLoading = false;
	error: string = null;

	private closeSub: Subscription;

	constructor(
		private authService: AuthService,
		private router: Router,
		private componentFactoryResolver: ComponentFactoryResolver
	) {}

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;

		let authObs: Observable<AuthResponseData>;

		this.isLoading = true;

		if (this.isLoginMode) {
			// authObs = this.authService.login(email, password);
			if (email == "root@gmail.com" && password == "test123") {
				localStorage.setItem('token',"asdsad")
				this.router.navigate(['/edit-details']);
			}
		} else {
			// authObs = this.authService.signup(email, password);
		}

		form.reset();
	}

	onHandleError() {
		this.error = null;
	}

	ngOnDestroy() {
		if (this.closeSub) {
			this.closeSub.unsubscribe();
		}
	}

	// private showErrorAlert(message: string) {
	// 	const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
	// 	const hostViewContainerRef = this.alertHost.viewContainerRef;
	// 	hostViewContainerRef.clear();

	// 	const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

	// 	componentRef.instance.message = message;
	// 	this.closeSub = componentRef.instance.close.subscribe(() => {
	// 		this.closeSub.unsubscribe();
	// 		hostViewContainerRef.clear();
	// 	});
	// }
}

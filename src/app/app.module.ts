import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TerminalComponent } from './about/terminal/terminal.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ShowcaseComponent,
		SocialComponent,
		AboutComponent,
		LanguagesComponent,
		ProjectsComponent,
		ContactComponent,
		FooterComponent,
  TerminalComponent
	],
	imports: [ BrowserModule, BrowserAnimationsModule, CarouselModule.forRoot(), CollapseModule.forRoot() ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

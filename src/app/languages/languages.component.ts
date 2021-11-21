import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-languages',
	templateUrl: './languages.component.html',
	styleUrls: [ './languages.component.scss' ]
})
export class LanguagesComponent implements OnInit {
	imgName = [ 'html5', 'css', 'typescript','javascript', 'golang','c++', 'python', 'java' ];
	langName = [ 'HTML', 'CSS', 'TypeScript','JavaScript', "Golang",'C++', 'PYTHON', 'JAVA' ];

	toolFreamwork = [
		'Angular1.png',
		'Bootstrap1.png',
		'Vscode1.png',
		'git.png',
		'Flutter1.png',
		'Github1.png',
		'Mysql1.png',
		'Android1.png'
	];
	toolName = [ 'Angular', 'Bootstrap', 'VScode', "Git",'Flutter', 'Github', 'MySql', 'Android' ];

	constructor() {}

	ngOnInit(): void {}
}

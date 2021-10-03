import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent{

  user = {
    name: "Tiep Phan",
    age: 12,
  };
  inputtype = 'text';

  handler(){
  	console.log('click');
  }

	authors = [
		{
			id: 1,
			firstName: "Flora",
			lastName: "Twell",
			email: "ftwell0@phoca.cz",
			gender: "Female",
			ipAddress: "99.180.237.33",
		},
		{
			id: 2,
			firstName: "Priscella",
			lastName: "Signe",
			email: "psigne1@berkeley.edu",
			gender: "Female",
			ipAddress: "183.243.228.65",
		}
	];

	isDanger = false;
	isWarning = false;
}

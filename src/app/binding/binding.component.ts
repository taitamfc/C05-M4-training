import { Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
	title:string = 'Binding Component';
	link:string = 'https://angular.io/guide/template-syntax';

	personObj:any = {
		'name' : 'abc',
		'age' : '20',
	}

	showInfo() : string {
		return this.personObj.age + '' + this.personObj.name;
	}
}

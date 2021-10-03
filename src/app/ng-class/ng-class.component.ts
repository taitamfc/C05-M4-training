import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  isList:boolean = true;
  setClasses() {
		return {
			'glyphicon-th': !this.isList,      // false
			'glyphicon-th-list': this.isList, // true
		};
	}
}

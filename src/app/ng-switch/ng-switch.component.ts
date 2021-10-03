import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent{
	toeChoice:string = 'abc';
	tab:string = 'home';

	changeTab( tab:string ) : void{
		this.tab = tab;
	}
}

import { Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {


	clickMe1() : void {
		console.log('clickMe1');
	}

	clickMe2(): void {
		console.log( event );
	}

	btnClick(): void {
		let objEvent = event;
		console.log( objEvent);
	}

	divClick(): void {
		console.log( event );
	}

	onKeyUp(event: any): void {
		if( event.which == 13 ){
			let tag = event.target.value;
			$('#result-tag').append(`<span class="btn btn-success">${tag}</span>`);
			event.target.value = '';
		}
	}


}

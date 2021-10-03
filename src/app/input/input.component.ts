import { Component, Input } from '@angular/core'; // First, import Input
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  inputs:[
  	"item",
  	"tdesc:mdesc"
  ]
})
export class InputComponent {
	@Input() item?: string; // decorate the property with @Input()
	@Input('mdesc') tdesc?: string; // decorate the property with @Input()
}

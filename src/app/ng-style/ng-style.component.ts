import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  canSave: boolean = true;
	isUnchanged: boolean = false;
	isSpecial: boolean = true;
	setStyles() {
		return {
			'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
			'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
			'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
		};
	}
}
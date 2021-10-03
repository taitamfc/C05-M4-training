import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //@Output('answerRequest' ) :any = new EventEmitter();
  @Output() answerRequest = new EventEmitter<any>();
  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: string) {
  	console.log('addNewItem: '+value );
    this.newItemEvent.emit(value);
  }

  onClick(value:any){
  	console.log('onClick: '+value );
  	this.answerRequest.emit(value);
  }

}

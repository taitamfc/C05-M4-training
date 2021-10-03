import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem: string = 'Television';
  desc: string = 'desc';
  

  answer( event:any ) : void {
  	console.log('answer: '+event );
  }
  addItem( event:any ) : void {
  	console.log('addItem: '+event );
  }

  ComponentTitle: string = 'App Component';
  //resetColor: string = '#000804';
  resetColor: string = 'red';

  function_reset_Color(){
    this.resetColor = '#000804';
    console.log('AppComponent function_reset_Color: ' );
  }

  changeColor( event:any ): void{
    this.resetColor = event;
    console.log('AppComponent changeColor: '+event );
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:Date= new Date();
  customPicketOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPicketOptions ={
      buttons: [{
        text: 'save',
        handler: ()=> console.log('Clicked Save!')
      },
      {
        text: 'log',
        handler: ()=> {
          console.log('Clicked log, Do not Dismiss!');
          return false;
        }
      }]
    }
  };

  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}

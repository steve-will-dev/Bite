import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} You Have Angular 2 Up and Running. Time to have fun developing!</h1>`,
})
export class AppComponent  { name = 'Steve'; }

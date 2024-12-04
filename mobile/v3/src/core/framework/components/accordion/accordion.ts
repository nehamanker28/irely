import { Component } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {

  text: string;

  constructor() {
    console.log('Hello AccordionComponent Component');
    this.text = 'Hello World';
  }

}

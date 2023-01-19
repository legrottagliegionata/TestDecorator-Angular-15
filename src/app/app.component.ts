import { Component } from '@angular/core';

export function ExtendsConstructor<T extends new (...args: any[]) => object>(constr: T) {
  return class extends constr {
    constructor(...args: any[]) {
      super(...args);
      console.log('••• Ovrerride constructor');
    }
  };
}

@Component({
  selector: 'app-root',
  template: `
   Test constructor decorator
   <br>
   <h4>show console log</h4>

   Expected result:
    <br>
    ••• TestDecorator constructor
    <br>
    ••• Ovrerride constructor
    <br><br>

    Actual result:
    <br>
    ••• TestDecorator constructor
  `,
  styles: []
})
@ExtendsConstructor
export class AppComponent {
  title = 'TestDecorator';

  constructor() {
    console.log('••• TestDecorator constructor');
  }
}

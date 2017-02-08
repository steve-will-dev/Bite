import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  template: `<div class="jumbotron">
  <div class="container">
  <h1>Hello, world!</h1>
  <p>...</p>
  </div>
</div>`,
})
export class HeroComponent  { name = 'Steve'; }

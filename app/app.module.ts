import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SidemenuComponent }  from './sidemenu.component';
import { HeroComponent }  from './hero.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SidemenuComponent, HeroComponent ],
  bootstrap:    [ AppComponent, SidemenuComponent, HeroComponent ],

})
export class AppModule { }

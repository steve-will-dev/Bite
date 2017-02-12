
//Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// APP Components
import { AppComponent }  from './app.component';
import { SidemenuComponent }  from './sidemenu.component';
import { HeroComponent }  from './hero.component';
import { MainpageComponent }  from './mainpage.component';
import { NavigationComponent }  from './nav.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule
                ],

  declarations: [ AppComponent,
                  SidemenuComponent,
                  HeroComponent,
                  MainpageComponent,
                  NavigationComponent
                ],

  bootstrap:    [ AppComponent,]
  ,

})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { ChildComponent } from './family/child/child.component';
import { DatabindingComponent } from './logic/databinding/databinding.component';

@NgModule(
  {
  declarations: [    
    AppComponent, 
    FirstComponent, 
    SecondComponent, 
    GrandparentComponent, 
    FatherComponent, 
    MotherComponent, 
    ChildComponent, 
    DatabindingComponent  ],
  imports: [    
    BrowserModule,    
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
}
)

export class AppModule { }

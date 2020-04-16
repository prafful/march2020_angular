import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { ChildComponent } from './family/child/child.component';
import { DatabindingComponent } from './logic/databinding/databinding.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { DirectiveExamplesComponent } from './directive/directive-examples/directive-examples.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { IfdirectiveComponent } from './directive/ifdirective/ifdirective.component';
import { SwitchdirectiveComponent } from './directive/switchdirective/switchdirective.component';
import { StyledirectiveComponent } from './directive/styledirective/styledirective.component';
import { ClassdirectiveComponent } from './directive/classdirective/classdirective.component';

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
    DatabindingComponent, 
    NotfoundComponent, 
    DirectiveExamplesComponent, 
    FordirectiveComponent, 
    IfdirectiveComponent, 
    SwitchdirectiveComponent, 
    StyledirectiveComponent, 
    ClassdirectiveComponent  
  ],
  imports: [    
    BrowserModule,    
    AppRoutingModule ,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)

export class AppModule { }

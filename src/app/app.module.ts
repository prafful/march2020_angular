import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


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
import { AllpipesComponent } from './pipe/allpipes/allpipes.component';
import { BuiltinComponent } from './pipe/builtin/builtin.component';
import { CustomComponent } from './pipe/custom/custom.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { ConsumeallComponent } from './consume/consumeall/consumeall.component';
import { LocaloneComponent } from './consume/localone/localone.component';
import { LocaltwoComponent } from './consume/localtwo/localtwo.component';
import { LocalthreeComponent } from './consume/localthree/localthree.component';
import { AllComponent } from './remotecomponent/all/all.component';
import { ConsumehttpComponent } from './remotecomponent/consumehttp/consumehttp.component';


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
    ClassdirectiveComponent, 
    AllpipesComponent, 
    BuiltinComponent, 
    CustomComponent, 
    SortstringPipe, 
    NumbersortPipe, 
    ConsumeallComponent, 
    LocaloneComponent, 
    LocaltwoComponent, 
    LocalthreeComponent, 
    AllComponent, 
    ConsumehttpComponent  
  ],
  imports: [    
    BrowserModule,    
    AppRoutingModule ,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)

export class AppModule { }

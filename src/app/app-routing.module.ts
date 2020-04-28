import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { DatabindingComponent } from './logic/databinding/databinding.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { DirectiveExamplesComponent } from './directive/directive-examples/directive-examples.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { IfdirectiveComponent } from './directive/ifdirective/ifdirective.component';
import { SwitchdirectiveComponent } from './directive/switchdirective/switchdirective.component';
import { StyledirectiveComponent } from './directive/styledirective/styledirective.component';
import { ClassdirectiveComponent } from './directive/classdirective/classdirective.component';
import { AllpipesComponent } from './pipe/allpipes/allpipes.component';
import { BuiltinComponent } from './pipe/builtin/builtin.component';
import { CustomComponent } from './pipe/custom/custom.component';
import { ConsumeallComponent } from './consume/consumeall/consumeall.component';
import { LocaloneComponent } from './consume/localone/localone.component';
import { LocaltwoComponent } from './consume/localtwo/localtwo.component';
import { LocalthreeComponent } from './consume/localthree/localthree.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'first',
    pathMatch:'full'
  },
  {
    path:'first',
    component: FirstComponent
  },
  {
    path:'family',
    component: GrandparentComponent,
    children:[
      {
        path:'',
        redirectTo:'mother',
        pathMatch:'full'
      },
      {
        path:'father',
        component:FatherComponent
      },
      {
        path:'mother',
        component: MotherComponent
      }
    ]
  },
  {
    path:'databinding',
    component:DatabindingComponent
  },
  {
    path:'directive',
    component:DirectiveExamplesComponent,
    children:[
      {
        path:'for',
        component:FordirectiveComponent
      },
      {
        path:'if',
        component:IfdirectiveComponent
      },
      {
        path:'switch',
        component:SwitchdirectiveComponent
      },
      {
        path:'style',
        component:StyledirectiveComponent
      },
      {
        path:'class',
        component:ClassdirectiveComponent
      }

    ]
  },
  {
    path:'pipe',
    component:AllpipesComponent,
    children:[
      {
        path:'builtin',
        component:BuiltinComponent
      },
      {
        path:'custom',
        component:CustomComponent
      }
    ]
  },
  {
    path:'service',
    component:ConsumeallComponent,
    children:[
      {
        path:'localone',
        component:LocaloneComponent
      },
      {
        path:'localtwo',
        component:LocaltwoComponent
      },
      {
        path:'localthree',
        component:LocalthreeComponent
      }
    ]
  },

  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

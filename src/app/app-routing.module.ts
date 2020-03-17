import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { GrandparentComponent } from './family/grandparent/grandparent.component';
import { DatabindingComponent } from './logic/databinding/databinding.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';


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
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

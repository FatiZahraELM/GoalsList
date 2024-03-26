import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { JokeComponent } from '../joke/joke.component';
import { GoalFormComponent } from '../goal-form/goal-form.component';
import { GoalListComponent } from '../goal-list/goal-list.component';

export const routes: Routes = [
  {
    path : "home" ,
    component : HomeComponent
  },
  {
    path : "about" ,
    component : AboutComponent
  },
  {
    path : "joke" ,
    component : JokeComponent
  },
  {
    path : "form" ,
    component : GoalFormComponent
  },{
    path : "list" ,
    component : GoalListComponent
  },
];

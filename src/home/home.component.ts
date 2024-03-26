import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Goal } from '../assets/models/Goal.model';
import {GoalFormComponent} from '../goal-form/goal-form.component';
import {GoalListComponent} from '../goal-list/goal-list.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,FormsModule,GoalListComponent,GoalFormComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  goals:Goal[] = [];

  addItem(goalText:string){
    let goal=new Goal(goalText);
   this.goals.push(goal);
 }
 deleteItem(index: number){
    this.goals.splice(index,1)
 }



}

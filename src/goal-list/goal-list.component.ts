import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Goal } from '../assets/models/Goal.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-goal-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './goal-list.component.html',
  styleUrl: './goal-list.component.scss'
})
export class GoalListComponent {
  @Input('goals') goals: Goal[]=[];
  @Output() newItemEvent = new EventEmitter<number>();
 
  deleteItem(index: number){
    this.newItemEvent.emit(index);
  }
}
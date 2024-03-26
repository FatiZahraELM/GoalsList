import { Component, Output ,EventEmitter} from '@angular/core';
import { Goal } from '../assets/models/Goal.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './goal-form.component.html',
  styleUrl: './goal-form.component.scss'
})
export class GoalFormComponent {
  

  @Output() newItemEvent =new EventEmitter<string>();
  itemCount:Number=4;
  goalText='';
  btnText:string="Submit";


  addItem  (): void{
    if(this.goalText.trim() !== ''){
    let goalObj:Goal=new Goal(this.goalText);
    this.newItemEvent.emit(goalObj.name);
    this.goalText='';
    }

  }

}

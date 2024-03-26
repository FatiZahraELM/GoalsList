import { Component ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Goal } from '../assets/models/Goal.model';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HomeComponent
  ], 
 templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
 
 })
  export class AppComponent {
    title = 'mon-projet';
  }
  


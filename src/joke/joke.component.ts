import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [NgFor],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  // setup: string;
  // punchline: string;
  array : joke[] ;
  constructor(){

    this.array = [
      {
        setup : "Où sommes nous?",
        punchline :"Joke 1"
      } ,
      {
        setup : "Où sommes nous?",
        punchline :"Joke 2 "
      } , {
        setup : "Où sommes nous?",
        punchline :"Joke 3"
      } ,

    ]
   
  }
 
}
interface joke{
  setup:string;
  punchline:string;
}

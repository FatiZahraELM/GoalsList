import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  setup: string;
  punchline: string;

  constructor(){
    this.setup="que dire?";
    this.punchline="Hello ";
  }
}

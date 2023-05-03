import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'App'
  }

  onClickButton() {
    this.title = 'App' ? 'Not App' : 'App';
    console.log(this.title);
  }
}

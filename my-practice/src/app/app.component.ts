import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  sum: number;
  firstNum: number;
  secondNum: number;
  sumHeading: any;

  calculate() {
    this.sum = this.firstNum + this.secondNum;
    this.sumHeading = this.firstNum + ' + ' + this.secondNum;
   }

}



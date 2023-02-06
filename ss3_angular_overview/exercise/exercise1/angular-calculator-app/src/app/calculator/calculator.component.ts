import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  calculator: string = '';
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  calculate() {
    switch (this.calculator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
      default:
        return 0;
    }
  }
}

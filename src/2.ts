// Math Homework Repository
import { Component } from '@angular/core';

@Component({
  selector: 'app-math-homework',
  templateUrl: './math-homework.component.html',
  styleUrls: ['./math-homework.component.css']
})
export class MathHomeworkComponent {
  // Properties
  mathProblems: any[];
  userInput = '';
  solution = '';
  // Constructor
  constructor() {
    this.mathProblems = [];
  }
  // Methods
  generateMathProblem(): void {
    const problem = {
      operation: '+',
      operands: [1, 2]
    };
    this.mathProblems.push(problem);
  }
  checkAnswer(): void {
    const solution = parseInt(this.userInput, 10);
    if (solution === this.getSolution()) {
      alert('Correct!');
    } else {
      alert('Incorrect');
    }
  }
  getSolution(): number {
    const problem = this.mathProblems[this.mathProblems.length - 1];
    switch (problem.operation) {
      case '+': return problem.operands[0] + problem.operands[1];
      case '-': return problem.operands[0] - problem.operands[1];
      case '*': return problem.operands[0] * problem.operands[1];
      case '/': return problem.operands[0] / problem.operands[1];
    }
  }
}

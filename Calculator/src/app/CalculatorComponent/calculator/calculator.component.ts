import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/ButtonComponent/button/button.component';
import { BackendService } from 'src/app/Service/backend.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  currentItem = '';
  @Input() id: any = " ";
  @Input() class: any;

  constructor (private backendService: BackendService) {}

  inputArray: { type: string, value: string }[] = []; 

  update1(value: string, type: string) {
    console.log("in calculator ", value);
    console.log(type);

    if (type == "operation") {
      console.log("in operation btn block");
      if (value == "=") {
        this.backendService.calculate(this.inputArray);
        console.log("final evaluation of ", this.currentItem);
        console.log("final evaluation of inputArray", this.inputArray);
        // todo print inputArray
        // todo send this inputArray to Backend Service
        // todo  calling backend service calculate method
      
      } else {
        this.currentItem += value;
        if(value == "+"){
          this.inputArray.push({ type: "OPERATION", value: "ADDITION" });
        } else if(value == "-"){
          this.inputArray.push({ type: "OPERATION", value: "SUBTRACTION" });
        } else if(value == "*"){
          this.inputArray.push({ type: "OPERATION", value: "MULTIPLICATION" });
        } else {
          this.inputArray.push({ type: "OPERATION", value: "DIVISION" });
        }
        console.log("If not operation", this.currentItem);
        console.log("type:", type, "value:", value);
      }
    } else if (type == "numeric") {
      this.currentItem += value;
      console.log("This is current value", this.currentItem);
      // Check if the last item in inputArray is also a number and concatenate them
      if (this.inputArray.length > 0 && this.inputArray[this.inputArray.length - 1].type === "NUMBER") {
        const lastNumber = this.inputArray.pop()!;
        lastNumber.value += value;
        this.inputArray.push(lastNumber);
      } else {
        this.inputArray.push({ type: "NUMBER", value: value }); 
      }
      console.log("type:", type, "value:", value);
    } else {
      console.log("in function btn block");
      if (value == "AC") {
        this.currentItem = " ";
        this.inputArray = [];
      } else if (value == "DEL") {
        this.currentItem = this.currentItem.slice(0, -1);
      }
    }
  }

  public functions = ["AC", "DEL", "."];
  public operations = ["+", "-", "*", "/", "="];
  public numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
}



import { Component,Output,EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent extends  ButtonComponent {

  onFunctionButtonClick(func:any){
    console.log("in onFunctionButtonClick()",func)
    this.updateData.emit(func);
  }
}


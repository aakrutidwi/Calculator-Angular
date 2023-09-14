import { Component,Output,EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent extends ButtonComponent{
  onOperationButtonClick(operation:any){
    console.log("in onOperationButtonClick()",operation)
    this.updateData.emit(operation);
  }
}

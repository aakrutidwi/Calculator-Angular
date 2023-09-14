import { Component,Output,EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})
export class NumericComponent extends ButtonComponent {
  onNumericButtonClick(num:any){
    console.log("in onNumericButtonClick()",num)
    this.updateData.emit(num);
  }
}

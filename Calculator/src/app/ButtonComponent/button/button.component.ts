import { Component ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 
  @Output() updateData:  EventEmitter <any> = new EventEmitter <any>();
  
  @Input() btn=" "
  
  @Input() id: any;
  @Input() class:any


  update(value:string){
    
    console.log(" in ButtonComponent ",value)
    this.updateData.emit(value);
      }
}

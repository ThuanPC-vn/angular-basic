import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{
  
  @Input() userNameChild = '';

  @Output() opNameChild = new EventEmitter<string>();

  public childChangeName(){
    // this.userNameChild = 'ThuanPC | web developement';
    this.opNameChild.emit('ThuanPC | web developement');
  }
}

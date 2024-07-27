import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userNameParent: string = 'ThuanPC';

  public updateUser(){
    this.userNameParent = 'ThuanPC dz vcl';
  }

  public childUserChange(event: string){
    this.userNameParent = event;
  }
}

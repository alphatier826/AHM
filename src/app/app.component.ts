import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketWepApp';
  isClicked = false;
  
  menuClick(){
    this.isClicked = !this.isClicked;
  }
}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-registration';





  constructor() {
    setTheme('bs5');
  }


}

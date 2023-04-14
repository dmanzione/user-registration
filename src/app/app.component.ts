import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { MatListOption } from '@angular/material/list';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-registration';
  activatedRoute: ActivatedRoute;
  
   



   constructor(activatedRoute:ActivatedRoute) {
      this.activatedRoute = activatedRoute; 
      // setTheme('bs5');
   }


   getRoute():string{
    return this.activatedRoute.snapshot.params[0];
   }
      
   
}

import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  El360: any[];
  constructor(db:AngularFireDatabase){
           db.list('/Electronics360').valueChanges()
          .subscribe(Electronics360 =>{
           this.El360=Electronics360;
           console.log(this.El360);
  });
}

}

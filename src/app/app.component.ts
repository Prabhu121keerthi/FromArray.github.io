import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'From Operator';

  ngOnInit() {
 
    const obsfrom1 = from([1, 2, 3, 4, 5, 6, 7]);
    obsfrom1.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
 
 }
 
}

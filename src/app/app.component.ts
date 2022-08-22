import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FromCollection';

  ngOnInit() {
    let myMap = new Map()
    myMap.set(0, 'Hello')
    myMap.set(1, 'World')
    const obsFrom3 = from(myMap);
    obsFrom3.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
  }
}

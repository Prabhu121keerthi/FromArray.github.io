import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable From Promise';

  ngOnInit() {
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    const obsFrom5 = from(promiseSource);
    obsFrom5.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
}
 
}

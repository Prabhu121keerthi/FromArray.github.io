import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FromString';

  ngOnInit() { 
    const obsfrom2 = from('Hello World');
      obsfrom2.subscribe(val => console.log(val),
        error => console.log("error"),
        () => console.log("complete"))
  }
}

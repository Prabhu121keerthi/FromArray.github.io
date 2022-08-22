import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable From Iterator';

  ngOnInit() {
    const obsFrom4 = from(this.generateNos())
     obsFrom4.subscribe(val => console.log(val),
     error => console.log("error"),
     () => console.log("complete"))
}

*generateNos() {
  var i = 0;
  while (i < 5) {
    i = i + 1;
    yield i;
  }
 }
}

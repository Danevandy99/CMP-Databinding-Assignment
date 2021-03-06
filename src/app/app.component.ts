import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: Array<number> = [];
  evens: Array<number> = [];

  onIntervalEvent(data: { num: number }) {
    if (data.num % 2 == 0)
      this.evens.push(data.num);
    else
      this.odds.push(data.num);
  }
}

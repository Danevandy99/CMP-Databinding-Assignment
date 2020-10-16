import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalEmitter = new EventEmitter<{ num: number }>();
  interval: any; 
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalEmit = () => {
    this.counter++;
    this.intervalEmitter.emit({
      num: this.counter
    });
  }

  start() {
    this.interval = setInterval(this.onIntervalEmit, 1000);
  }

  stop() {
    this.counter = 0;
    clearInterval(this.interval);
  }
}

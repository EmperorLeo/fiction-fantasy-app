import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() title: string;

  colors: string[];
  positions: string[];
  color: string;
  position: string;

  constructor() { }

  ngOnInit() {
    this.colors = ['green', 'blue', 'red', 'gray', 'brown'];
    this.positions = ['rotate-left', 'rotate-right', 'upright'];
    this.randomizeColor();
    this.randomizePosition();
  }

  // Delete the randomize methods once books have inherent color and position properties
  // They shouldn't change every refresh;
  private randomizeColor() {
    const rand = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[rand];
  }

  private randomizePosition() {
    const rand = Math.floor(Math.random() * this.positions.length);
    this.position = this.positions[rand];
  }

}

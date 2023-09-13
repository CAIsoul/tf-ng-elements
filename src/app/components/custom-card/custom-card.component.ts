import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() name = '';
  @Input() info = {
    age: 0,
    phone: ''
  };
  @Output() selectUser = new EventEmitter();

  constructor(
  ) { }
  ngOnInit(): void {
  }
  onSelectUser(): void {
    this.selectUser.emit({ ...this.info, name: this.name });
  }
}
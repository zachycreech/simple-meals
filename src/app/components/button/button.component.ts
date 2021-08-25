import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/// @name Button
/// @author Zachy
/// @description
/// Just a button to be used throughout.
/// @example
///  ----html----
///  <app-button text="Refresh" color="black" (btnClick)="onRefresh()"></app-button>
///   ----ts----
///   onRefresh() {
///     this.ngOnInit()
///   }

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() color: string = "rgb(55, 0, 158)";
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.btnClick.emit();
  }
}

import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.css"]
})
export class ActionsComponent implements OnInit {
  private delta = 2;
  @Output() up = new EventEmitter<number>();

  @Output() down = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onUpClick() {
    this.up.emit(this.delta);
  }

  onDownClick() {
    this.down.emit(this.delta);
  }
}

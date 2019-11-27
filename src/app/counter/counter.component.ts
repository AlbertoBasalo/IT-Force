import { Component, OnInit } from "@angular/core";
import { StoreService } from "./store.service";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  state = { counter: 0 };

  constructor(private store: StoreService) {
    this.state = store.state;
  }

  ngOnInit() {}

  onUpClick(x) {
    this.store.up(x);
  }

  onDownClick(x) {
    this.store.down(x);
  }
}

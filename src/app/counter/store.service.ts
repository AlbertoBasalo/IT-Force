import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  state = { counter: 0 };

  constructor() {}

  up(delta: number) {
    this.state.counter += delta;
  }

  down(delta: number) {
    this.state.counter -= delta;
  }
}

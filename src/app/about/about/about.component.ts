import { Component, OnInit } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  source: number[] = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
  source$: Observable<number[]> = of(this.source);
  sources$: Observable<number> = from(this.source);
  target = [];
  result: any;
  constructor() {
    this.target = this.source
      .filter(x => x > 3)
      .map(x => x * 2)
      .map(n => " Num: " + n)
      .map(n => n.length);

    [...this.source].sort((a, b) => b - a).forEach(x => console.log(x));

    this.source
      .filter(x => true)
      .sort((a, b) => b - a)
      .forEach(x => console.log(x));

    this.result = this.source.reduce((acc, item) => acc + item, "Start:");
    this.result = this.source.reduce((acc, item) => acc + item, 0);
    this.result = this.source.reduce((acc, item) => {
      if (acc <= item) {
        return acc;
      } else {
        return item;
      }
    });

    this.source$.subscribe(data => console.warn(data));
    this.sources$
      .pipe(
        map(x => 10 * x),
        tap(x => console.log("TAP:" + x))
      )
      .subscribe({
        next: data => console.log(data),
        error: err => console.error(err),
        complete: () => console.warn("END")
      });
    // .subscribe(
    //   data => console.log(data),
    //   err => console.error(err),
    //   () => console.warn("END")
    // );
  }

  ngOnInit() {}
}

// const result = [1,2,3,4,5,6,7,8,9,10]
//   .map(n => n * 2)
//   .filter(n => n > 4)
//   .map(n => ' Num: ' + n)
//   .reduce((acc, str) => acc + str, 'Start:');
// console.log( result );
// Start: Num: 6 Num: 8 Num: 10 Num: 12 Num: 14 Num: 16 Num: 18 Num: 20

// let result;
// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
//   map(n => n * 2),
//   filter(n => n > 4),
//   map(n => ' Num: ' + n),
//   reduce((acc, str) => acc + str, 'Start:')
// ).subscribe(r => result = r);
// console.log(result);
// Start: Num: 6 Num: 8 Num: 10 Num: 12 Num: 14 Num: 16 Num: 18 Num: 20

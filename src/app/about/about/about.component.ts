import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  source = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
  target = [];
  result: any;
  constructor() {
    this.target = this.source
      .filter(x => x > 3)
      .map(x => x * 2)
      .map(n => " Num: " + n)
      .map(n => n.length);
    this.source.sort((a, b) => b - a).forEach(x => console.log(x));

    this.result = this.source.reduce((acc, item) => acc + item, "Start:");
    this.result = this.source.reduce((acc, item) => acc + item, 0);
    this.result = this.source.reduce((acc, item) => {
      if (acc <= item) {
        return acc;
      } else {
        return item;
      }
    });
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

import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.css"]
})
export class ExchangeComponent implements OnInit {
  private url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP";
  rates: IRate;
  rates$: Observable<object>;
  constructor(private http: HttpClient) {
    this.http.get<IRate>(this.url).subscribe({
      next: data => (this.rates = data)
    });
    console.log(this.url);

    this.rates$ = this.http.get<IRate>(this.url).pipe(map(data => data.rates));
  }

  ngOnInit() {}
}

interface IRate {
  rates: object;
  base: string;
  date: Date;
}

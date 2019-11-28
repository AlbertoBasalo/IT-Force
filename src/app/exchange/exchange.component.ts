import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.css"]
})
export class ExchangeComponent implements OnInit {
  private url = "https://api.exchangeratesapi.io/latest?symbols=USD,GBP";
  rates;
  rates$;
  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe({
      next: data => (this.rates = data.rates)
    });
    console.log(this.url);

    this.rates$ = this.http.get<any>(this.url).pipe(map(data => data.rates));
  }

  ngOnInit() {}
}

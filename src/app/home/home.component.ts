import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "Abanca - IT force";
  dueDate = new Date();
  isDisabled = true;
  imageAlt = "abanca staff";
  isGreen = false;
  isCyan = false;
  myNumber = 0;
  customers = ["Amancio", "Bill", "Jeff", "Mark"];
  provincias = [
    { cod: 15, texto: "A Coruña" },
    { cod: 27, texto: "Lugo" },
    { cod: 34, texto: "Ourense" },
    { cod: 36, texto: "Pontevedra" }
  ];
  provinciaSeleccionada;
  constructor() {}

  ngOnInit() {}
  isOdd() {
    return this.myNumber % 2 != 0;
  }

  clickOnActivate() {
    this.isDisabled = !this.isDisabled;
    this.isCyan = true;
  }
}

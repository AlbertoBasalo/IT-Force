import { Component, OnInit } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  // Array de numbers
  source: number[] = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
  // un array destino en el que guardar resultados
  target = [];
  // un resultado genérico de nuestra actividad
  result: any;
  // un array para almacenar los datos ordenados
  clonOrdenado: number[];
  // Observable que trata arrays de números
  source$: Observable<number[]>;
  // Observable que trata números
  sources$: Observable<number>;
  // Observable que recibe números para mostrar
  targets$: Observable<number>;

  constructor() {
    // Operaciones con arrays usando funciones
    this.target = this.source
      .filter(n => n > 3) // expresión de filtro que retorna boolean
      .map(x => x * 2) // expresión de transformación
      .map(n => " Num: " + n) // pueden retornar cualquier cosa
      .map(s => s.length); // se pueden enganchar unas a otras

    // Las anteriores son todas funciones puras, no mutan el array sobre el que se aplican
    // Pero las hay impuras, que cambian el array origen. Por ejemplo sort()
    this.clonOrdenado = [...this.source]; // Si queremos evitarlo tenemos que usar un clon
    this.clonOrdenado.sort((a, b) => b - a);

    // A veces se quiere hacer cosas con los datos, pero sin afectarlos
    // Estos efectos secundarios se pueden ejecutar para cada elemento
    this.clonOrdenado.forEach(item => console.log(item));

    // lo más avanzado, potente y complejo, son las funciones reductoras
    // recibe una función y un valor inicial
    this.result = this.source.reduce((total, item) => total + item, "Start:");
    // la función opera sobre cada elemento, prero recibe como entrada el resultado de la anterior ejecución
    this.result = this.source.reduce((total, item) => total + item, 0);
    // la función reductora suele ser compleja y no siempre se resuelve en una línea
    this.result = this.source.reduce((total, item) => {
      if (total <= item) {
        return total;
      } else {
        return item;
      }
    });

    // otro tema: los observables
    // se parecen a los arrays porque trantan conjuntos de datos
    // pero la diferencia es que aquí los datos vienen cuando les da la gana

    // necesitamos una fuente productora de eventos
    this.source$ = of(this.source); // en este caso un único evento cuyo contenido es un array
    this.source$.subscribe(data => console.warn(data)); // y suscribirnos
    // la suscripción clásica se hace mediante callbacks

    // a partir de un array también se puede generar un evento para cada elemento
    this.sources$ = from(this.source);
    // este stream de suceso, se puede canalizar y tratar en la tubería
    this.sources$
      .pipe(
        map(x => 10 * x), // el operador map ejecuta una función de transformación
        tap(x => console.log("TAP:" + x)) // el operador tap ejecuta un efecto secundario
      ) // la tubería es una gran función parámetrica
      .subscribe({
        next: data => console.log(data),
        error: err => console.error(err),
        complete: () => console.warn("END")
      }); // la moderna suscripción mediante un objeto

    // La vieja suscripción clásica por prámetros
    // .subscribe(
    //   data => console.log(data),
    //   err => console.error(err),
    //   () => console.warn("END")
    // );

    // por si fuera poco...
    // en Angular también podemos usar el pipe async
    this.targets$ = this.sources$.pipe(map(x => 3 * x));
  }

  ngOnInit() {}
}

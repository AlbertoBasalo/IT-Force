import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-nav-shell></app-nav-shell>
  `,
  styles: []
})
export class AppComponent {
  title = "coffee";
}

// <a routerLink="">Home </a><a routerLink="abanca"> - Abanca </a
// ><a routerLink="about"> - About us </a
// ><a routerLink="contact"> - Contact us </a>
// <a routerLink="customers"> - Customers </a>
// <app-shell></app-shell>
// <router-outlet> </router-outlet>

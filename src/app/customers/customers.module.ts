import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { CustomersComponent } from "./customers.component";

const routes: Routes = [
  { path: "", component: CustomersComponent },
  { path: ":customerId", component: CustomerComponent },
  { path: "unknown", component: CustomerComponent }
];

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CustomersModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { ContactService } from "./contact.service";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ContactService]
})
export class ContactModule {}

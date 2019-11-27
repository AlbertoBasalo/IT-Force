import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActionsComponent } from "./actions/actions.component";
import { CounterComponent } from "./counter.component";
import { DisplayComponent } from "./display/display.component";

const routes: Routes = [{ path: "", component: CounterComponent }];

@NgModule({
  declarations: [CounterComponent, ActionsComponent, DisplayComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CounterModule {}

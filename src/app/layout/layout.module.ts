import { LayoutModule as MaterialLayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { NavShellComponent } from "./nav-shell/nav-shell.component";
import { CopyrightComponent } from "./shell/copyright/copyright.component";
import { ShellComponent } from "./shell/shell.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

@NgModule({
  declarations: [
    ShellComponent,
    TopBarComponent,
    CopyrightComponent,
    NavShellComponent
  ],
  imports: [
    CommonModule,
    MaterialLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [ShellComponent, NavShellComponent]
})
export class LayoutModule {}

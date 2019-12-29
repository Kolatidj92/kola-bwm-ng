import { headerComponent } from "./common/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { RentalComponent } from "./rental/rental.component";

import { RentalModule } from "./rental/rental.module";

const routes: Routes = [
  { path: "", redirectTo: "/rentals", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, headerComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, RentalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

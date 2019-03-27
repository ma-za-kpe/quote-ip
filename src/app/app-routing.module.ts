import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddQuoteComponent } from "./add-quote/add-quote.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "add",
    component: AddQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

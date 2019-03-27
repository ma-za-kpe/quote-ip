import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { QuotesDetailsComponent } from "./quotes-details/quotes-details.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    AddQuoteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

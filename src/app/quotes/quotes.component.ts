import { Component, OnInit } from "@angular/core";

import { Quote } from "../quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quote: Quote;
  quotes = [
    new Quote(
      1,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",
      5,
      new Date(2019, 5, 14)
    ),
    new Quote(
      2,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",
      6,
      new Date(2019, 3, 24)
    ),
    new Quote(
      3,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",
      8,
      new Date(2018, 3, 14)
    ),
    new Quote(
      4,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",
      6,
      new Date(2018, 3, 14)
    ),
    new Quote(
      5,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",

      5,
      new Date(2018, 3, 14)
    ),
    new Quote(
      6,
      "Maku",
      "Paul",
      "Solve math homework, I have to buy cookies for the parrot",
      1,
      new Date(2018, 3, 14)
    )
  ];
  constructor() {}
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  sortedQuotes(): Quote[] {
    return this.quotes.sort((a: Quote, b: Quote) => b.vote - a.vote);
  }

  voteUp(index): void {
    this.quotes[index].vote += 1;
  }

  voteDown(index) {
    this.quotes[index].vote -= 1;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  ngOnInit() {
    this.max();
  }

  max() {
    var y = this.sortedQuotes().map(v => {
      var vv = v.vote;
      var max = Math.max(vv);
      return max;
    });
    // console.log(y[0]);
    return y[0];
  }
}

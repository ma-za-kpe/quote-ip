export class Quote {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public description: string,
    public vote: number
  ) {
    this.vote = 0;
    this.showDescription = false;
  }

  voteUp() {
    this.vote += 1;
  }
}

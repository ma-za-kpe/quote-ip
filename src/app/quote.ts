export class Quote {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public description: string,
    public vote: number,
    public completeDate: Date
  ) {
    this.vote = 0;
    this.showDescription = false;
  }

  voteUp(): void {
    this.vote += 1;
  }
}

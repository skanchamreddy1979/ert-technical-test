export class Beer {
  id: string;
  name: string;
  tagLine: string;
  abv: string;
  imgUrl: string;
  description: string;
  firstBrewed: string;

  static fromDto(dto: any): Beer {
    const beer = new Beer();
    beer.id = dto.id;
    beer.name = dto.name;
    beer.tagLine = dto.tagline;
    beer.abv = dto.abv;
    beer.imgUrl = dto.image_url;
    beer.description = dto.description;
    beer.firstBrewed = dto.first_brewed
    return beer;
  }
}

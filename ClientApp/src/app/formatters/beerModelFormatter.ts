import { Beer } from 'src/app/models/beer.model';

export function getBeerModelFromDto(obj: any): Beer {
    const beer: Beer = {
        id: obj.id,
        name: obj.name,
        tagLine: obj.tagline,
        abv: obj.abv,
        imgUrl: obj.image_url,
        description: obj.description,
        firstBrewed: obj.first_brewed,
    };

    return beer;
}

import { Beer } from '../models/beer.model';

export class TestData {
    constructor() { }
    public static getBeerTestData = (): Beer[] => {
        const mockResponse: Beer[] = [
            {
                id: 1,
                name: 'Buzz',
                tagLine: 'A Real Bitter Experience.',
                firstBrewed: '09/2007',
                description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
                imgUrl: 'https://images.punkapi.com/v2/keg.png',
                abv: 4.5,
            },
            {
                id: 2,
                name: 'Trashy Blonde',
                tagLine: 'You Know You Shouldnot',
                firstBrewed: '04/2008',
                description: 'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
                imgUrl: 'https://images.punkapi.com/v2/2.png',
                abv: 4.1,
            },
            {
                id: 3,
                name: 'Berliner Weisse With Yuzu - B-Sides',
                tagLine: 'Japanese Citrus Berliner Weisse.',
                firstBrewed: '11/2015',
                description: 'Japanese citrus fruit intensifies the sour nature of this German classic.',
                imgUrl: 'https://images.punkapi.com/v2/keg.png',
                abv: 4.2,
            }];

        return mockResponse;
    }
    public static getBeerTByIdestData = (): Beer[] => {
        const mockResponse: Beer[] = [
            {
               id: 1,
               name: 'name',
               tagLine: 'tagline',
               firstBrewed: 'firstbrewed',
               description: 'description',
               imgUrl: '',
               abv: 1.1
            }];
        return mockResponse;
    }

}

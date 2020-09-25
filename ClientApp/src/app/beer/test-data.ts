import { Beer } from './models/Beer';

export class TestData {
  constructor() {}
  public static getBeerTestData = (): Beer[] => {
    const mockResponse: Beer[] = [
      {
        id: 1,
        name: 'Buzz',
        tagline: 'A Real Bitter Experience.',
        first_brewed: '09/2007',
        description:
          'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.5,
      },
      {
        id: 2,
        name: 'Trashy Blonde',
        tagline: 'You Know You Shouldnot',
        first_brewed: '04/2008',
        description:
          'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
        image_url: 'https://images.punkapi.com/v2/2.png',
        abv: 4.1,
      },
      {
        id: 3,
        name: 'Berliner Weisse With Yuzu - B-Sides',
        tagline: 'Japanese Citrus Berliner Weisse.',
        first_brewed: '11/2015',
        description:
          'Japanese citrus fruit intensifies the sour nature of this German classic.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.2,
      },
    ];

    return mockResponse;
  };
  public static getBeerByIdTestData = (): Beer[] => {
    const mockResponse: Beer[] = [
      {
        id: 1,
        name: 'Buzz',
        tagline: 'A Real Bitter Experience.',
        first_brewed: '09/2007',
        description:
          'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
        image_url: 'https://images.punkapi.com/v2/keg.png',
        abv: 4.5,
      },
    ];
    return mockResponse;
  };
}

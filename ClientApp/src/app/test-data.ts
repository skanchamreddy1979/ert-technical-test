import { IBeer } from './models/beer';

export class TestData {

  public static getBeerTestData = (): IBeer[] => {
    const mockResponse: IBeer[] = [
      {
        id: 2,
        name: 'Trashy Blonde',
        tagline: "You Know You Shouldn't.",
        first_brewed: '04/2008',
        description:
          'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
        image_url: 'https://images.punkapi.com/v2/2.png',
        abv: 4.1
      },
      {
        id: 5,
        name: 'Avery Brown Dredge',
        tagline: "Bloggers' Imperial Pilsner.",
        first_brewed: '02/2011',
        description:
          'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
        image_url: 'https://images.punkapi.com/v2/5.png',
        abv: 7.2
      },
      {
        id: 6,
        name: 'Electric India',
        tagline: 'Vibrant Hoppy Saison.',
        first_brewed: '05/2013',
        description:
          'Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.',
        image_url: 'https://images.punkapi.com/v2/6.png',
        abv: 5.2
      },
      {
        id: 8,
        name: 'Fake Lager',
        tagline: 'Bohemian Pilsner.',
        first_brewed: '05/2013',
        description:
          'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
        image_url: 'https://images.punkapi.com/v2/8.png',
        abv: 4.7
      },
      {
        id: 10,
        name: 'Bramling Xr',
        tagline: 'Single Hop IPA Series - 2011.',
        first_brewed: '01/2011',
        description:
          'Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.',
        image_url: 'https://images.punkapi.com/v2/10.png',
        abv: 7.5
      }
    ];

    return mockResponse;
  };

  public static getBeerByIdTestData = (): IBeer[] => {
    const mockResponse: IBeer[] = [
      {
        id: 5,
        name: 'Avery Brown Dredge',
        tagline: "Bloggers' Imperial Pilsner.",
        first_brewed: '02/2011',
        description:
          'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
        image_url: 'https://images.punkapi.com/v2/5.png',
        abv: 7.2
      }
    ];
    return mockResponse;
  };
}

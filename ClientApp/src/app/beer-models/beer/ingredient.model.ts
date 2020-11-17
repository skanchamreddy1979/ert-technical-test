import { IMalt } from "../beer_ingridient/malt.model";
import { IHops } from "../beer_ingridient/hops.model";


export interface IIngredient{
  malts: IMalt[];
  hops: IHops[];
  yeast: string;
}

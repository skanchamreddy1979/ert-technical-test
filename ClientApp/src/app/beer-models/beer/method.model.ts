import { IMashTemp } from "../beer_method/mash_temp.model";
import { IFermentation } from "../beer_method/fermentation.model";

export interface IMethod {
  mashTemp: IMashTemp[];
  fermentation: IFermentation;
}

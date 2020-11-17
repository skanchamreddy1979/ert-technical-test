import { IVolume } from "./volume.model";
import { IBoilVolume } from "./boil_volume.model";
import { IMethod } from "./method.model";
import { IIngredient } from "./ingredient.model";
import { IFoodPairing } from "./food_pairing.model";
import { IBrewersTips } from "./brewersTips.model";
import { IcontributedBy } from "./contributed_by.model";

export interface IBeer{
  id: string;
  name: string;
  tagLine: string;
  abv: string;
  imgUrl: string;
  description: string;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: IVolume;
  boil_volume: IBoilVolume;
  method: IMethod;
  ingredients: IIngredient;
  food_pairing: IFoodPairing;
  brewers_tips: IBrewersTips;
  contributed_by: IcontributedBy;
}

import { BeerItem } from './../../interfaces/beer-item.model';
import {createSelector, createFeatureSelector} from '@ngrx/store';
import { Beer } from 'src/app/beer.model';
import { beerName } from './beer.name';

export const beerItemsSelector = createFeatureSelector<BeerItem[]>(beerName);
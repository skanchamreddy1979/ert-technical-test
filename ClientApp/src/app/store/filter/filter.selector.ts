import { filterName } from './filter.name';
import { createFeatureSelector} from '@ngrx/store';

export const filterSelector = createFeatureSelector<string>(filterName);

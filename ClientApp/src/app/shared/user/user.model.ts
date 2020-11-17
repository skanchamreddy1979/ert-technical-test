import { Favourite } from './favourite/favourite.model';

export class User {
    public userId: number;
    public name: string;
    public email: string;
    public favourites: Favourite[];
}

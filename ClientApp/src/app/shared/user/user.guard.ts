import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "./user.service";

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.userService.autoSignIn().pipe(
            map(user => {
                if (!!user) {
                    return true;
                }
                return this.router.createUrlTree(['/list']);
            })
        );
    }
}
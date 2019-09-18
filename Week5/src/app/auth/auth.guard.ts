import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanLoad, Router, UrlSegment } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> | boolean {
        if(!this.authService.userIsAuthenticated){
            this.router.navigateByUrl('/auth');
        }
        return this.authService.userIsAuthenticated;
    }
}
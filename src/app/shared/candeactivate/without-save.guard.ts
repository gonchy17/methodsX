import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface PuedeDesactivar{
   permitirSalirDeRuta:()=> Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree;
}
@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanDeactivate<unknown>{
  canDeactivate(
    component: PuedeDesactivar,//unknow por defecto
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
      return component.permitirSalirDeRuta ? component.permitirSalirDeRuta():true;
  }
  
}

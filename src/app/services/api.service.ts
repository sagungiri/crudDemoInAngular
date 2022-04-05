import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _mainService: MainService) { }

  getUsers(query: string):Promise<any> {
    return this._mainService.callWebserviceHttpGet(query);
  };
}

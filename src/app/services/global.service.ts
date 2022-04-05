import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  trashIcon: string = '';
  userIcon: string = '';
  addIcon: string = '';
  isLoading: boolean = false;
  constructor() { }

}

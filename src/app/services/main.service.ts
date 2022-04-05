import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _httpClient: HttpClient) { }

  callWebserviceHttpGet(webserviceApiName:string):Promise<any>{
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
    })
    return this._httpClient.get(environment.url +webserviceApiName).toPromise();
  }

  callWebserviceHttpPost(webserviceApiName: string, objParams: any){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // })
    return this._httpClient.post(environment.url+webserviceApiName,objParams ).toPromise();
  }

  callWebserviceHttpPut(webserviceApiName: string, objParams: any){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // })
    return this._httpClient.put(environment.url+webserviceApiName,objParams ).toPromise();
  }

  callWebserviceHttpDelete(webserviceApiName:string){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',

    // })
    return this._httpClient.delete(environment.url+webserviceApiName ).toPromise();
  }
}

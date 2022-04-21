import { Injectable } from '@angular/core';
declare let alertify:any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  basarili(message:string){

    alertify.success(message)
  }
}

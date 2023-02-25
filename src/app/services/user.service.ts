import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  showAlertMsgNoDI(){
    alert('Alert message from CLI Service Created- No DI')
  }

  showAlertMsgDI(){
    alert('Alert message from CLI Service Created- DI')
  }


}

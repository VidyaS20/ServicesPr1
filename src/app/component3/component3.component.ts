import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  users:any;
  constructor(private userServ: UserService) { }

  ngOnInit(): void {
  }

  onGetUsers(){
    this.userServ.showAlertMsgDI();
    // this.users = [
    //   {
    //     name:'vidya',
    //     phone:123,
    //     city:'Solapur'
    //   },
    //   {
    //     name:'Rupa',
    //     phone:123,
    //     city:'Solapur'
    //   },
    //   {
    //     name:'Raghvendra',
    //     phone:123,
    //     city:'Solapur'
    //   }
    // ]
  }
}

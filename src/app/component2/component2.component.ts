import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  users:any;
  userServ = new UserService()
  constructor() { }

  ngOnInit(): void {
  }



  onGetUsers(){
    this.userServ.showAlertMsgNoDI()
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

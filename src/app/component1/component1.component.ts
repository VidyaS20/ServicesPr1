import { Component, OnInit } from '@angular/core';
import { UserManualService } from '../services/userManual.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:any;
  userServ = new UserManualService();
  onGetUsers(){
  this.userServ.getUserAlert()
    // this.users=[
    //   {
    //     name:'Vidya',
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

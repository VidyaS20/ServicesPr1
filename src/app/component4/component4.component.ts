import { Component, OnInit } from '@angular/core';
import { UserManualService } from '../services/userManual.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  users:any;
  ngOnInit(): void {
    // this.onGetUsers();
    console.log('ng onit calling')
  }
    constructor(private userServ:UserManualService) {
      this.onGetUsers();
      console.log('constructor calling')
     }



  onGetUsers(){
    this.users=this.userServ.users;
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

import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-comp9',
  templateUrl: './comp9.component.html',
  styleUrls: ['./comp9.component.css']
})
export class Comp9Component implements OnInit {
phone:any = 123
  constructor(private behaviourServ: BehaviourService) { }

  ngOnInit(): void {
    this.behaviourServ.phoneNumber.subscribe(res =>{
      this.phone=res
    })
  }
  onPhUpdate(ph:any){
    this.phone=ph.value
    this.behaviourServ.phoneNumber.next(ph.value)
  }
}

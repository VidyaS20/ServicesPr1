import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.css']
})
export class Comp8Component implements OnInit {
  phone:any= 123;
  constructor(private behaviourServ : BehaviourService) { }

  ngOnInit(): void {
  }
  onUpdateNo(ph:any){
    console.log('phone No click',ph.value)
    this.phone = ph.value
    this.behaviourServ.phoneNumber.next(ph.value)
    this.behaviourServ.phoneNumber.subscribe(res =>{
      this.phone = res
    })
    // this.phBehaviour.phoneNumber.subscribe(res => {
    //   this.phone = res;
    // })

  }
}

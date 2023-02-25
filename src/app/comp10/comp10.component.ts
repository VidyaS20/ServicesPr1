import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';


@Component({
  selector: 'app-comp10',
  templateUrl: './comp10.component.html',
  styleUrls: ['./comp10.component.css']
})
export class Comp10Component implements OnInit {
  phone= ''
  constructor(private behaviourServ : BehaviourService) { }

  ngOnInit(): void {
    this.behaviourServ.phoneNumber.subscribe(res =>{
      this.phone=res
    })
  }

  onPhUpdate(ph:any){
    this.phone= ph.value
    this.behaviourServ.phoneNumber.next(ph.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component implements OnInit {
  username = 'Vidya'

  constructor(private subServ: SubjectService) {
    this.subServ.usersname.subscribe(res => {
      this.username = res;
    })
   }

  ngOnInit(): void {
  }
  onUpdate(uname:any){
    console.log('On btn click',uname.value)
    this.subServ.usersname.next(uname.value)
  }

}

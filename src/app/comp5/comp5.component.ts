import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {
  username = 'Vidya'

  constructor(private subServ: SubjectService) {
    this.subServ.usersname.subscribe(res => {
      this.username = res;
    })
   }

  ngOnInit(): void {
  }
  onUpdate(uname:any){
    console.log('On btn click',uname.value);
    this.username = uname.value;
    this.subServ.usersname.next(uname.value);
  }
}
